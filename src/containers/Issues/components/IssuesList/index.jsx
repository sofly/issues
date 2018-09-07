import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import Body from './../Body';
import Header from './../Header';

export default function IssuesList(props) {
  const { onClickTab, issues, tabList, onClickIssue, activeTabId } = props;

  return (
    <div className={styles.wrapper}>
      <Header tabList={tabList} onClickTab={onClickTab} activeTabId={activeTabId} />
      <Body issues={issues} onClickIssue={onClickIssue} activeTabId={activeTabId} />
    </div>
  );
}

IssuesList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      state: PropTypes.string,
    }),
  ).isRequired,
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
      counter: PropTypes.number,
    }),
  ).isRequired,
  onClickTab: PropTypes.func.isRequired,
  activeTabId: PropTypes.string.isRequired,
  onClickIssue: PropTypes.func.isRequired,
};
