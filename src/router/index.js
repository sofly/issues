import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { ROUTE_HOME, ROUTE_USER, ROUTE_REPOSITORY } from './../router/constants';

import Home from '../screens/Home';
import User from '../screens/User';
import Repository from '../screens/Repository';

import Header from '../components/Header';

function RootRouter({ goToHome }) {
  return (
    <Fragment>
      <Header goToHome={goToHome} />

      <Fragment>
        <Route path={ROUTE_HOME} component={Home} exact />
        <Route path={ROUTE_USER} component={User} exact />
        <Route path={ROUTE_REPOSITORY} component={Repository} />
      </Fragment>
    </Fragment>
  );
}

RootRouter.propTypes = {
  goToHome: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push('/')),
});

export default connect(null, mapDispatchToProps)(RootRouter);
