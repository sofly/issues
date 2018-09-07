import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.scss';

function getSuitableElementAndProps({ to, href, onClick }) {
  let Element = 'button';
  const props = { onClick };

  if (to) {
    Element = Link;
    props.to = to;
  } else if (href) {
    Element = 'a';
    props.href = href;
  }

  return { Element, props };
}

export default function CustomLink({ children, className, bold, ...anotherProps }) {
  const classNames = classnames(styles.link, className, { [styles.bold]: bold });

  const { Element, props } = getSuitableElementAndProps(anotherProps);

  return (
    <Element className={classNames} {...props}>
      {children}
    </Element>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  bold: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  to: '',
  href: '',
  bold: false,
  onClick: () => {},
  className: '',
};
