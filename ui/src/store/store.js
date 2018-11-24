import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import { asyncEffects } from './asyncEffects.middleware';
import logger from 'redux-logger';
import {fetchStudentMiddleware, saveStudentMiddleware} from './feature/students/students.middleware'


const configureStore = () =>
    createStore(reducers, applyMiddleware(
        logger,
        fetchStudentMiddleware,
        saveStudentMiddleware,
        // asyncEffects
        ));

export { configureStore };