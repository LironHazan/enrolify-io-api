import { types } from '../../types';
const { STUDENTS_FETCH_ALL, STUDENTS_SAVE_STUDENT, STUDENTS_DIALOG_TOGGLE} = types;

export const fetchStudents = (asyncFn) => ({
    type: STUDENTS_FETCH_ALL.SOURCE,
    asyncFn
});

export const saveStudent = (payload, asyncFn, sideEffects) => ({
    type: STUDENTS_SAVE_STUDENT,
    payload,
    asyncFn,
    sideEffects
});

// export const fetchStudents = () => {
//     return dispatch => {
//         dispatch({ type: FETCH_STUDENTS });
//         axios.get(`${API}/students`)
//             .then(res => res.data)
//             .then(res => dispatch(setStudentsList(res)))
//             .catch(err => console.log(err));
//     }
// };
//
// const modalCleanups = (dispatch) => {
//     dispatch(toggleDialog(false));
//    // dispatch(setSaveStudentError({message: null}));
// };
//
// export const saveStudent = (student) => {
//     return dispatch => {
//         dispatch({ type: SAVE_STUDENT });
//         axios.post(`${API}/students/add`, student)
//             .then(res => res.data)
//             .then(res => {
//                 modalCleanups(dispatch);
//                 return dispatch(fetchStudents())
//             })
//             .catch(err => dispatch(setSaveStudentError(err))
//             );
//     }
// };
//
// export const editStudent = (student) => {
//     return dispatch => {
//         dispatch({ type: EDIT_STUDENT });
//         axios.post(`${API}/students/update`, student)
//             .then(res => res.data)
//             .then(res => dispatch(fetchStudents()))
//             .catch(err => dispatch(setSaveStudentError(err))
//             );
//     }
// };

export const toggleDialog = (payload) => ({
    type: STUDENTS_DIALOG_TOGGLE,
    payload
});
