import { types } from '../../types';

const INITIAL_STATE = {
    students: [],
    isFetching: false,
    savingStudent: false,
    error: null,
    open: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.STUDENTS_FETCH_ALL.SUCCESS:
            return {
                ...state,
                students: action.payload,
                isFetching: false
            };
        case types.STUDENTS_SAVE_STUDENT.ERROR:
            return {
                ...state,
                savingStudent: false,
                open: true,
                error: action.payload
            };
        case types.STUDENTS_EDIT_STUDENT.ERROR:
            return {
                ...state,
                savingStudent: false,
                open: true,
                error: action.payload
            };
        case types.STUDENTS_DIALOG_TOGGLE:
            return {
                ...state,
                open: action.payload,
            };
        case types.STUDENTS_DIALOG_DESTROY:
            return {
                ...state,
                error: action.payload,
            };
        default: return state;
    }
}