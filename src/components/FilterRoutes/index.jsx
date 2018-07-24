import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FilterRoutes({ children, component, filterRoutes, pathname }) {
  const showChildren = !filterRoutes.includes(pathname);

  return showChildren && children(component);
}

FilterRoutes.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  component: PropTypes.any.isRequired, // eslint-disable-line
  filterRoutes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = ({ router: { location: { pathname } } }) => ({
  pathname,
});

export default connect(mapStateToProps)(FilterRoutes);
