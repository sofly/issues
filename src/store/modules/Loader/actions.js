import { createActions } from 'redux-actions';

const { loaderShow: show, loaderHide: hide } = createActions('LOADER_SHOW', 'LOADER_HIDE');

export default {
  show,
  hide,
};
