import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

export default function Header({ onClickTab, tabList, activeTabId }) {
  return (
    <div className={styles.header}>
      {tabList.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onClickTab(tab.id)}
          className={classnames(styles.button, { [styles.active]: tab.id === activeTabId })}
        >
          <i className={classnames(styles.icon, tab.icon)} />
          {`${tab.counter} ${tab.text}`}
        </button>
      ))}
    </div>
  );
}

Header.propTypes = {
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
};
