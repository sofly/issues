import { handleActions } from 'redux-actions';

import actions from './actions';

const { show, hide } = actions;

const defaultState = { isShow: false, counter: 0 };

const reducer = handleActions(
  {
    [show.toString()]: (state) => ({
      isShow: true,
      counter: state.counter + 1,
    }),
    [hide.toString()]: (state) => {
      const counter = state.counter - 1;

      return {
        isShow: !!counter,
        counter,
      };
    },
  },
  defaultState,
);

export default reducer;
