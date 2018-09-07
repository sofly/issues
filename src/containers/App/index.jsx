import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RootRouter from '../../router';

import ScrollToTop from '../../components/ScrollToTop';

function App({ location }) {
  return (
    <div className="wrapper">
      <ScrollToTop>
        <RootRouter location={location} />
      </ScrollToTop>
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default hot(module)(withRouter(App));
