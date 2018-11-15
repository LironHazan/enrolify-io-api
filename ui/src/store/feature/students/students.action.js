import axios from 'axios';
import { FETCH_STUDENTS,
    FETCH_STUDENTS_COMPLETION,
    SAVE_STUDENT,
    SAVE_STUDENT_ERROR,
    DIALOG_TOGGLE,
    EDIT_STUDENT
} from '../../types';

const API = "http://localhost:3000";

export const setStudentsList = (students) => ({
    type: FETCH_STUDENTS_COMPLETION,
    payload: students
});

export const setSaveStudentError = ({message}) => ({
    type: SAVE_STUDENT_ERROR,
    payload: message
});

export const fetchStudents = () => {
    return dispatch => {
        dispatch({ type: FETCH_STUDENTS });
        axios.get(`${API}/students`)
            .then(res => res.data)
            .then(res => dispatch(setStudentsList(res)))
            .catch(err => console.log(err));
    }
};

const modalCleanups = (dispatch) => {
    dispatch(toggleDialog(false));
    dispatch(setSaveStudentError({message: null}));
};

export const saveStudent = (student) => {
    return dispatch => {
        dispatch({ type: SAVE_STUDENT });
        axios.post(`${API}/students/add`, student)
            .then(res => res.data)
            .then(res => {
                modalCleanups(dispatch);
                return dispatch(fetchStudents())
            })
            .catch(err => dispatch(setSaveStudentError(err))
            );
    }
};

export const editStudent = (student) => {
    return dispatch => {
        dispatch({ type: EDIT_STUDENT });
        axios.post(`${API}/students/update`, student)
            .then(res => res.data)
            .then(res => dispatch(fetchStudents()))
            .catch(err => dispatch(setSaveStudentError(err))
            );
    }
};

export const toggleDialog = (open) => ({
    type: DIALOG_TOGGLE,
    payload: open
});
