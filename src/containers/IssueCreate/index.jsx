import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as actionsIssues from './../../store/modules/Issues/actions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles.scss';

class IssueCreate extends PureComponent {
  static propTypes = {
    issueAdd: PropTypes.func.isRequired,
    goToIssues: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  onChange = (title) => {
    this.setState({ title });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;

    if (!title) {
      return;
    }

    const { issueAdd, goToIssues } = this.props;

    issueAdd({ title });
    goToIssues();
  };

  render() {
    const { title } = this.state;

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Create new Issue</h1>

        <form className={styles.form} onSubmit={this.onSubmit}>
          <Input
            className={styles.input}
            value={title}
            onChange={this.onChange}
            placeholder="Title..."
          />
          <Button primary type="submit">
            Create issue
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchTopProps = (dispatch) => ({
  issueAdd: (issue) => dispatch(actionsIssues.issueAdd(issue)),
  goToIssues: () => dispatch(push('../')),
});

export default connect(null, mapDispatchTopProps)(IssueCreate);
