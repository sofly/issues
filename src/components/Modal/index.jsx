import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const modalNode = document.getElementById('modal');

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    onCloseModal: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    children: null,
    onCloseModal: () => null,
  };

  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    this.el.classList.add(styles.wrapper);
  }

  componentDidMount() {
    const { isOpen } = this.props;

    if (isOpen) {
      this.showModal();
    }
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    const changeVisible = isOpen !== prevProps.isOpen;

    if (changeVisible) {
      if (isOpen) {
        this.showModal();
      } else {
        this.closeModal();
      }
    }
  }

  componentWillUnmount() {
    this.removeModalInDOM();
  }

  onEndAnimation = () => {
    this.el.classList.remove(styles.show);
    this.el.classList.remove(styles.hidden);
    this.el.removeEventListener('animationend', this.onEndAnimation);

    this.removeModalInDOM();
  };

  showModal() {
    this.addModalInDOM();
    this.el.classList.add(styles.show);
  }

  closeModal() {
    this.el.classList.add(styles.hidden);

    this.el.addEventListener('animationend', this.onEndAnimation);
  }

  addModalInDOM() {
    modalNode.appendChild(this.el);
  }

  removeModalInDOM() {
    modalNode.removeChild(this.el);
  }

  render() {
    const { children, onCloseModal } = this.props;

    return createPortal(
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={onCloseModal} />
        <div className={styles.content}>
          <div className={styles.inner}>{children}</div>
        </div>
      </div>,
      this.el,
    );
  }
}
