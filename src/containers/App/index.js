import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import Loader from './../../containers/Loader';

import RootRouter from './../../router';

import ScrollToTop from './../../components/ScrollToTop';

function App({ location }) {
  return (
    <div className={classnames('root')}>
      <ScrollToTop>
        <RootRouter location={location} />
      </ScrollToTop>

      <Loader />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default hot(module)(withRouter(App));
