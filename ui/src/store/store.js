import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import { asyncEffects } from './asyncEffects.middleware';
import logger from 'redux-logger';


const configureStore = () =>
    createStore(reducers, applyMiddleware(logger,
        asyncEffects));

export { configureStore };