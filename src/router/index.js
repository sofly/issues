import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { ROUTE_HOME } from './../router/constants';

import Home from '../screens/Home';

function RootRouter() {
  return (
    <Fragment>
      <Route path={ROUTE_HOME} component={Home} exact />
    </Fragment>
  );
}

export default RootRouter;
