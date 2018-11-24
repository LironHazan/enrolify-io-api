import { combineReducers } from 'redux';

import students from './feature/students/students.reducer';

export const reducers = combineReducers({
    students
});