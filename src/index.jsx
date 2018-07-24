import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'reset-css/reset.css';
import './styles/global.scss';

import App from './containers/App';

import createStore from './store/createStore';
import createHistory from './history/createHistory';

const history = createHistory();
const store = createStore(history);

const renderRoot = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(renderRoot(), document.getElementById('root')); // eslint-disable-line
