import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import { sideEffects } from './sideEffects.middleware';
import logger from 'redux-logger';
import studentsMiddlewares from './feature/students/students.middleware';


const configureStore = () =>
    createStore(reducers, applyMiddleware(
        logger,
        ...studentsMiddlewares,
        sideEffects
        ));

export { configureStore };