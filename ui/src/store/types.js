
const apiAction = (actionType) => ({
    SOURCE: `${actionType}`,
    SUCCESS: `${actionType}_SUCCESS`,
    ERROR: `${actionType}_ERROR`,
});

export const STUDENTS = 'STUDENTS';
export const types = {
    // students:
    STUDENTS_DIALOG_TOGGLE: 'STUDENTS_DIALOG_TOGGLE',
    STUDENTS_DIALOG_DESTROY: 'STUDENTS_DIALOG_DESTROY',
    STUDENTS_FETCH_ALL: apiAction('STUDENTS_FETCH_ALL'),
    STUDENTS_SAVE_STUDENT: apiAction('STUDENTS_SAVE_STUDENT'),
    STUDENTS_EDIT_STUDENT: apiAction('STUDENTS_EDIT_STUDENT')
};