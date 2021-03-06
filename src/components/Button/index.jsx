import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.scss';

function getSuitableElementAndProps({ to, href, type, onClick }) {
  let Element = 'button';
  const props = { onClick };

  if (to) {
    Element = Link;
    props.to = to;
  } else if (href) {
    Element = 'a';
    props.href = href;
  } else {
    props.type = type;
  }

  return { Element, props };
}

export default function Button({ children, className, primary, ...anotherProps }) {
  const classNames = classnames(styles.button, className, { [styles.primary]: primary });

  const { Element, props } = getSuitableElementAndProps(anotherProps);

  return (
    <Element className={classNames} {...props}>
      {children}
    </Element>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  to: '',
  href: '',
  type: 'button',
  primary: false,
  onClick: () => {},
  className: '',
};
