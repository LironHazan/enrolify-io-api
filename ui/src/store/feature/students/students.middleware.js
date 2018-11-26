import {saveStudents, fetchStudents, editStudents} from '../../../pages/back-office/students/students.service';
import { types } from '../../types';
import { saveStudentSuccess, editStudentSuccess } from './students.action';

const saveStudentMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    if(action.type === types.STUDENTS_SAVE_STUDENT.SOURCE) {
        try {
        const { data } = await saveStudents(action.payload);
        console.log(data);
        if (data) return dispatch(saveStudentSuccess());
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
        await editStudents(action.payload);
        return dispatch(editStudentSuccess());
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
        const { data } = await fetchStudents();
        if (data) return dispatch({type: types.STUDENTS_FETCH_ALL.SUCCESS, payload: data});
        }
        catch (err) {
            dispatch({type: types.STUDENTS_FETCH_ALL.ERROR, payload: err.message || 'Error'})
        }
    }
    next(action);
  }

const destroyDialog = ({ dispatch, getState }) => (next) => (action) => {
    if(action.type === types.STUDENTS_DIALOG_TOGGLE && !action.action) {
        dispatch({type: types.STUDENTS_DIALOG_DESTROY, payload: ''});
    }
    next(action);
  }

  export default [fetchStudentMiddleware, saveStudentMiddleware, editStudentMiddleware, destroyDialog];
