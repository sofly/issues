import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import Button from './../../components/Button';

import styles from './styles.scss';

function IssueInfo({ issues, match: { params: { issueId } }, goBack: onClick }) {
  console.log(issueId);
  const issue = issues.find((i) => i.id === Number(issueId));

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{issue.title}</h1>

      <Button onClick={onClick}>Go back</Button>
    </div>
  );
}

IssueInfo.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      state: PropTypes.string,
    }),
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      issueId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  goBack: PropTypes.func.isRequired,
};

const mapStateToProps = ({ issues: { entities: issues } }) => ({
  issues,
});

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueInfo);
