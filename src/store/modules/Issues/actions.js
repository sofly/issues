import { createActions } from 'redux-actions';

export const { issueAdd, issueRemove, issueToggleState } = createActions(
  'ISSUE_ADD',
  'ISSUE_REMOVE',
  'ISSUE_TOGGLE_STATE',
);
