import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

export default class Input extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    icon: '',
    type: 'text',
    value: '',
    className: '',
    placeholder: '',
  };

  state = {
    value: this.props.value,
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { value } = this.state;
    const { icon, type, placeholder, className } = this.props;

    const classNames = classnames(styles.input, className);

    return (
      <div className={classNames}>
        {!!icon && <i className={classnames(icon, styles.icon)} />}
        <input
          type={type}
          value={value}
          onChange={this.onChange}
          className={classnames(styles.field, { [styles.withoutIcon]: !icon })}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
