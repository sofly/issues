import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

export default function Button({ href, children, className, onClick, secondary }) {
  const classNames = classnames(styles.button, className, { [styles.secondary]: secondary });

  const isLink = !!href;

  const Element = href ? 'a' : 'button';
  const props = {};

  if (isLink) {
    props.href = href;
  } else {
    props.onClick = onClick;
  }

  return (
    <Element className={classNames} {...props}>
      <span>{children}</span>
    </Element>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  href: '',
  onClick: () => {},
  className: '',
  secondary: false,
};
