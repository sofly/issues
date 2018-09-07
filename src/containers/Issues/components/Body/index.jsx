import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { ISSUE_STATES } from './../../../../store/modules/Issues/constants';

import Button from './../../../../components/Button';

import styles from './styles.scss';

export default function Body({ issues, activeTabId, onClickIssue }) {
  const isOpen = ISSUE_STATES.OPEN === activeTabId;
  const icon = isOpen ? 'fas fa-exclamation-circle' : 'far fa-times-circle';
  const textButton = isOpen ? 'Close issue' : 'Reopen issue';

  return (
    <ul className={styles.list}>
      {issues.map((issue) => (
        <li key={issue.id} className={styles.row}>
          <div className={classnames(styles.wrapperIcon, { [styles.closed]: !isOpen })}>
            <i className={classnames(icon, styles.icon)} />
          </div>
          <Link to={`${issue.id}/`} className={styles.title}>
            {issue.title}
          </Link>
          <Button onClick={() => onClickIssue(issue.id)}>{textButton}</Button>
        </li>
      ))}
    </ul>
  );
}

Body.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      state: PropTypes.string,
    }),
  ).isRequired,
  onClickIssue: PropTypes.func.isRequired,
  activeTabId: PropTypes.string.isRequired,
};
