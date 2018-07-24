import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import objReducers from './modules/rootReducer';

const getEnhancers = (history) => {
  const middleware = [routerMiddleware(history)];
  const enhancers = applyMiddleware(...middleware);
  let composeEnhancers = (e) => e;

  if (process.env.NODE_ENV === 'development') {
    composeEnhancers =
      /* eslint-disable */
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
    /* eslint-disable */
  }

  return composeEnhancers(enhancers);
};

export default (history) => {
  const rootReducer = combineReducers(objReducers);
  const store = createStore(rootReducer, getEnhancers(history));

  return store;
};
