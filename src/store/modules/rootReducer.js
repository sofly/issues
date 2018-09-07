import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './Issues/reducer';

export default combineReducers({
  router: routerReducer,
  issues,
});
