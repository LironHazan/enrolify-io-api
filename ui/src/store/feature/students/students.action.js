import { types } from '../../types';

export const fetchStudents = () => ({
    type: types.STUDENTS_FETCH_ALL.SOURCE
});

export const saveStudent = (payload) => ({
    type: types.STUDENTS_SAVE_STUDENT.SOURCE,
    payload
});

export const saveStudentSuccess = (payload) => ({
    type: types.STUDENTS_SAVE_STUDENT.SUCCESS,
    payload,
    sideEffects: [toggleDialog(false), fetchStudents()]
});

export const editStudent = (payload) => ({
    type: types.STUDENTS_EDIT_STUDENT.SOURCE,
    payload
});

export const editStudentSuccess = (payload) => ({
    type: types.STUDENTS_EDIT_STUDENT.SUCCESS,
    payload,
    sideEffects: [toggleDialog(false), fetchStudents()]
});

export const toggleDialog = (payload) => ({
    type: types.STUDENTS_DIALOG_TOGGLE,
    payload
});
