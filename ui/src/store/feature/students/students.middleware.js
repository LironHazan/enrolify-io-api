import {saveStudents, fetchStudents} from '../../../components/back-office/students/students.service';
import { types } from '../../types';

const saveStudentMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    if(action.type === types.STUDENTS_SAVE_STUDENT.SOURCE) {
        try {
        const done = await saveStudents(action.payload);
        if (done) return dispatch({type: types.STUDENTS_SAVE_STUDENT.SUCCESS, payload: done});
        }
        catch (err) {
            dispatch({type: types.STUDENTS_SAVE_STUDENT.ERROR, payload: err.message || 'Error'})
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

  export {fetchStudentMiddleware, saveStudentMiddleware};