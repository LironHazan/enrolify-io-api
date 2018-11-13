const INITIAL_STATE = {
    students: [],
    isFetching: false,
    savingStudent: false,
    error: null,
    open: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_STUDENTS":
            return {
                ...state,
                students: [],
                isFetching: true,
                savingStudent: false
            };
        case "FETCH_STUDENTS_COMPLETION":
            return {
                ...state,
                students: action.payload,
                isFetching: false
            };
        case "SAVE_STUDENT":
            return {
                ...state,
                savingStudent: true
            };
        case "SAVE_STUDENT_ERROR":
            return {
                ...state,
                savingStudent: false,
                error: action.payload
            };
        case "EDIT_STUDENT":
            return {
                ...state,
                savingStudent: true
            };
        case "DIALOG_TOGGLE":
            return {
                ...state,
                open: action.payload,
            };
        default: return state;
    }
}