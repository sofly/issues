import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from './../../components/Modal';
import Spinner from './../../components/Loader';

class Loader extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
  };

  state = {
    isShow: false,
  };

  componentDidMount() {
    const { isShow } = this.props;

    if (isShow) {
      this.runTimeout();
    }
  }

  componentDidUpdate(prevProps) {
    const { isShow } = this.props;
    const isChangeVisible = isShow !== prevProps.isShow;

    if (isChangeVisible) {
      if (isShow) {
        this.runTimeout();
      } else {
        this.removeTimeout();
      }
    }
  }

  delay = 300;
  timeoutId = null;

  runTimeout() {
    if (!this.timeoutId) {
      this.timeoutId = setTimeout(this.showLoader, this.delay);
    }
  }

  removeTimeout() {
    clearTimeout(this.timeoutId);
    this.hiddenLoader();
    this.timeoutId = null;
  }

  showLoader = () => this.setState({ isShow: true });

  hiddenLoader = () => this.setState({ isShow: false });

  render() {
    const { isShow } = this.state;

    return (
      <Modal isOpen={isShow}>
        <Spinner />
      </Modal>
    );
  }
}

const mapStateTopProps = (state) => ({
  isShow: state.loader.isShow,
});

export default connect(mapStateTopProps)(Loader);
