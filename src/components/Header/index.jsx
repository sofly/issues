import React from 'react';
import PropTypes from 'prop-types';

import Link from './../Link';

import styles from './styles.scss';

export default function Header({ goToHome }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link className={styles.headerLogo} onClick={goToHome}>
          <i className="fab fa-github fa-3x" />
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  goToHome: PropTypes.func.isRequired,
};
