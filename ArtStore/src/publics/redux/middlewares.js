import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware'

const middlewares = [];
const reactNavigation = createReactNavigationReduxMiddleware(
  'root',
  state => state.router,
);

middlewares.push(reactNavigation);
middlewares.push(logger);
middlewares.push(promiseMiddleware());

export default middlewares;