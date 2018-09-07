import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ISSUE_STATES } from './../../store/modules/Issues/constants';
import * as actionsIssues from './../../store/modules/Issues/actions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import IssuesList from './components/IssuesList';

import { tabsData } from './constants';

import styles from './styles.scss';

class Issues extends PureComponent {
  static propTypes = {
    issues: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        state: PropTypes.string,
      }),
    ).isRequired,
    issueToggleState: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const searchStr = '';

    this.state = {
      searchStr,
      currentIssueState: ISSUE_STATES.OPEN,
    };
  }

  static getDerivedStateFromProps({ issues }, { searchStr }) {
    return {
      filteredIssues: Issues.getFilteredIssues(issues, searchStr),
    };
  }

  static filterByState(issues) {
    return tabsData.reduce(
      (filteredHash, { id }) => ({
        ...filteredHash,
        [id]: issues.filter((issue) => issue.state === id),
      }),
      {},
    );
  }

  static filterBySearchStr(searchStr, issues) {
    if (searchStr) {
      return issues.filter((issue) => issue.title.toLowerCase().includes(searchStr));
    }

    return issues;
  }

  static getFilteredIssues(issues, searchStr) {
    const filteredIssues = Issues.filterBySearchStr(searchStr, issues);

    return Issues.filterByState(filteredIssues);
  }

  getTabsList(defaultTabList) {
    const { filteredIssues } = this.state;

    return defaultTabList.map((tab) => ({
      ...tab,
      counter: filteredIssues[tab.id].length,
    }));
  }

  onChangeSearch = (searchStr) => {
    const { issues } = this.props;

    const filteredIssues = Issues.getFilteredIssues(issues, searchStr);

    this.setState({ searchStr, filteredIssues });
  };

  onChangeTab = (currentIssueState) => {
    this.setState({ currentIssueState });
  };

  onClickIssue = (issueId) => {
    this.props.issueToggleState(issueId);
  };

  render() {
    const { searchStr, currentIssueState, filteredIssues } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <Input
            icon="fas fa-search"
            value={searchStr}
            onChange={this.onChangeSearch}
            placeholder="Search Issues"
          />
          <Button primary to="new/">
            New issue
          </Button>
        </div>

        <IssuesList
          issues={filteredIssues[currentIssueState]}
          tabList={this.getTabsList(tabsData)}
          onClickTab={this.onChangeTab}
          activeTabId={currentIssueState}
          onClickIssue={this.onClickIssue}
        />
      </div>
    );
  }
}

const mapStateTopProps = ({ issues: { entities } }) => ({
  issues: entities,
});

const mapDispatchTopProps = (dispatch) => ({
  issueToggleState: (issueId) => dispatch(actionsIssues.issueToggleState(issueId)),
});

export default connect(mapStateTopProps, mapDispatchTopProps)(Issues);
