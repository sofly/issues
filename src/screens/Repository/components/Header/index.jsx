import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ROUTE_USER, ROUTE_REPOSITORY } from './../../../../router/constants';

import Link from './../../../../components/Link';

import styles from './styles.scss';

export default function Header({ user, repository, className }) {
  const toUser = ROUTE_USER.replace(':user', user);
  const toRepository = ROUTE_REPOSITORY.replace(':user', user)
    .replace(':repository', repository)
    .replace(':tab', '');

  return (
    <div className={classnames(styles.header, className)}>
      <div className={styles.info}>
        <i className="fa fa-book" />
        <Link to={toUser}>{user}</Link>
        <span>/</span>
        <Link bold to={toRepository}>
          {repository}
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};
