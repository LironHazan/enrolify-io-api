//core - API
export const API_REQUEST = 'API_REQUEST';

const apiAction = (action) => ({
    SOURCE: `${action}`,
    API_REQUEST: `${action}.${API_REQUEST}`,
    SUCCESS: `${action}.SUCCESS`,
    ERROR: `${action}.ERROR`,
});

//EMPLOYEES
export const STUDENTS = '[STUDENTS]';
export const FETCH_STUDENTS = apiAction('FETCH_STUDENTS');
export const SAVE_STUDENT = apiAction('SAVE_STUDENT');
export const EDIT_STUDENT = apiAction('EDIT_STUDENT');
export const FETCH_STUDENTS_COMPLETION = 'FETCH_STUDENTS_COMPLETION';
export const SAVE_STUDENT_ERROR = 'SAVE_STUDENT_ERROR';
export const DIALOG_TOGGLE = 'DIALOG_TOGGLE';
