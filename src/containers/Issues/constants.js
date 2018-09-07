import { ISSUE_STATES } from './../../store/modules/Issues/constants';

export const tabsData = [
  {
    id: ISSUE_STATES.OPEN,
    text: 'Open',
    icon: 'fas fa-exclamation-circle',
    counter: 0,
  },
  {
    id: ISSUE_STATES.CLOSED,
    text: 'Closed',
    icon: 'fas fa-check',
    counter: 0,
  },
];
