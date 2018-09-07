import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CountersConsumer } from './../../contexts/counters';

import styles from './styles.scss';

export default function Navigation({ navList, onLinkClick, currentLinkId }) {
  return (
    <CountersConsumer>
      {(counters) => (
        <nav className={styles.nav}>
          {navList.map((item, index) => (
            <button
              key={index}
              onClick={() => onLinkClick(item.to)}
              className={classnames(styles.item, {
                  [styles.selected]: item.id === currentLinkId,
                })}
            >
              <i className={classnames(styles.icon, item.icon)} />
              <span className={styles.text}>{item.text}</span>
              <span className={styles.counter}>{counters[item.id]}</span>
            </button>
            ))}
        </nav>
        )}
    </CountersConsumer>
  );
}

Navigation.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      id: PropTypes.string,
      icon: PropTypes.string,
      text: PropTypes.string,
      counter: PropTypes.number,
    }),
  ).isRequired,
  onLinkClick: PropTypes.func.isRequired,
  currentLinkId: PropTypes.string.isRequired,
};
