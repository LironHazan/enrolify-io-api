import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import createHistory from 'history/createHashHistory';
// import { routerMiddleware } from 'connected-react-router';
import { actionSplitterMiddleware } from './core/action-splitter.middleware';
import { apiMiddleware } from './core/api/api.middleware';
import { studentsMiddleware } from './feature/students/students.middleware';
import logger from 'redux-logger';

// const history = createHistory();
// const routeMiddleware = routerMiddleware(history);

const coreMiddlewares = [
  //  actionSplitterMiddleware,
   // routeMiddleware,
   // apiMiddleware,
    logger
];

const appMiddlewares = [
    studentsMiddleware
];

const configureStore = () => createStore(reducers, applyMiddleware([...coreMiddlewares, ...appMiddlewares]));

export { configureStore };