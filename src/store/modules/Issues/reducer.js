import { handleActions } from 'redux-actions';

import { ISSUE_STATES } from './constants';
import { issueAdd, issueRemove, issueToggleState } from './actions';

const defaultState = {
  entities: [
    {
      id: 242209479,
      title: 'Best way to load a folder of static files?',
      state: 'open',
    },
    {
      id: 242209480,
      title: 'Slow production build',
      state: 'open',
    },
    {
      id: 242209481,
      title: 'Support application version via env variable',
      state: 'open',
    },
    {
      id: 242209482,
      title: 'Tree Shaking?',
      state: 'open',
    },
    {
      id: 242209483,
      title: 'Code splitting with import promise in object',
      state: 'closed',
    },
  ],
};

const reducer = handleActions(
  {
    [issueAdd]: (state, { payload: { title } }) => ({
      ...state,
      entities: [{ title, state: ISSUE_STATES.OPEN, id: Math.random() }, ...state.entities],
    }),
    [issueRemove]: (state, { payload: issueId }) => ({
      ...state,
      entities: state.entities.filter((issue) => issue.id !== issueId),
    }),
    [issueToggleState]: (state, { payload: issueId }) => {
      const { entities } = state;

      const issueIndex = entities.findIndex((issue) => issue.id === issueId);
      const issue = entities[issueIndex];
      const changedIssue = {
        ...issue,
        state: ISSUE_STATES.OPEN === issue.state ? ISSUE_STATES.CLOSED : ISSUE_STATES.OPEN,
      };

      return {
        ...state,
        entities: [
          ...entities.slice(0, issueIndex),
          changedIssue,
          ...entities.slice(issueIndex + 1),
        ],
      };
    },
  },
  defaultState,
);

export default reducer;
