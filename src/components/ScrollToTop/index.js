import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ScrollToTop extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired, //eslint-disable-line
    pathname: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = ({ router: { location: { pathname } } }) => ({
  pathname,
});

export default connect(mapStateToProps)(ScrollToTop);
