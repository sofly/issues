import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  ROUTE_REPOSITORY,
  ROUTE_REPOSITORY_CODE,
  ROUTE_REPOSITORY_ISSUES,
  ROUTE_REPOSITORY_ISSUES_INFO,
} from './../../router/constants';

import Issues from './../../containers/Issues';
import IssueInfo from './../../containers/IssueInfo';
import Navigation from './../../components/Navigation';
import IssueCreate from './../../containers/IssueCreate';

import { CountersProvider } from './../../contexts/counters';

import Header from './components/Header';

import { defaultNavData } from './constants';

import styles from './styles.scss';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        tab: PropTypes.string,
        user: PropTypes.string.isRequired,
        repository: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    goToLink: PropTypes.func.isRequired,
    issuesLength: PropTypes.number.isRequired,
  };

  static renderSuitable = (props) => {
    if (props.match.params.issueId === 'new') {
      return <IssueCreate {...props} />;
    }

    return <IssueInfo {...props} />;
  };

  navData = this.updateDataNav(defaultNavData);

  updateDataNav(defaultData) {
    const { match: { params: { user, repository } } } = this.props;

    const pathRepository = ROUTE_REPOSITORY.replace(':user', user).replace(
      ':repository',
      repository,
    );

    return defaultData.map((item) => ({
      ...item,
      to: pathRepository.replace(':tab', item.to),
    }));
  }

  render() {
    const { goToLink, match: { params: { tab, user, repository } }, issuesLength } = this.props;

    return (
      <Fragment>
        <div className="pagehead">
          <div className="container">
            <Header className={styles.header} user={user} repository={repository} />

            <CountersProvider value={{ issues: issuesLength }}>
              <Navigation
                navList={this.navData}
                onLinkClick={goToLink}
                currentLinkId={tab || '/'}
              />
            </CountersProvider>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <Route exact strict path={ROUTE_REPOSITORY_CODE} render={() => <p>Empty :(</p>} />
            <Route path={ROUTE_REPOSITORY_ISSUES} component={Issues} exact />
            <Route path={ROUTE_REPOSITORY_ISSUES_INFO} render={Repository.renderSuitable} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ issues: { entities: issues } }) => ({
  issuesLength: issues.length,
});

const mapDispatchToProps = (dispatch) => ({
  goToLink: (link) => dispatch(push(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
