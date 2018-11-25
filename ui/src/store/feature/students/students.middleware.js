import {saveStudents, fetchStudents, editStudents} from '../../../components/back-office/students/students.service';
import { types } from '../../types';
import { saveStudentSuccess, editStudentSuccess } from './students.action';

const saveStudentMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    if(action.type === types.STUDENTS_SAVE_STUDENT.SOURCE) {
        try {
        const done = await saveStudents(action.payload);
        if (done) return dispatch(saveStudentSuccess(done));
        }
        catch (err) {
            dispatch({type: types.STUDENTS_SAVE_STUDENT.ERROR, payload: err.message || 'Error'})
        }
    }
    next(action);
  }

  const editStudentMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    if(action.type === types.STUDENTS_EDIT_STUDENT.SOURCE) {
        try {
        const done = await editStudents(action.payload);
        if (done) return dispatch(editStudentSuccess(done));
        }
        catch (err) {
            dispatch({type: types.STUDENTS_EDIT_STUDENT.ERROR, payload: err.message || 'Error'})
        }
    }
    next(action);
  }

const fetchStudentMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    if(action.type === types.STUDENTS_FETCH_ALL.SOURCE) {
        try {
        const response = await fetchStudents();
        if (response) return dispatch({type: types.STUDENTS_FETCH_ALL.SUCCESS, payload: response});
        }
        catch (err) {
            dispatch({type: types.STUDENTS_FETCH_ALL.ERROR, payload: err.message || 'Error'})
        }
    }
    next(action);
  }

  export default [fetchStudentMiddleware, saveStudentMiddleware, editStudentMiddleware];
