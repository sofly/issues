export const ROUTE_HOME = '/';

export const ROUTE_USER = '/:user';
export const ROUTE_REPOSITORY = '/:user/:repository/:tab?';

export const ROUTE_REPOSITORY_CODE = '/:user/:repository/';
export const ROUTE_REPOSITORY_ISSUES = `${ROUTE_REPOSITORY}/issues`;
export const ROUTE_REPOSITORY_ISSUES_INFO = `${ROUTE_REPOSITORY_ISSUES}/:issueId`;
