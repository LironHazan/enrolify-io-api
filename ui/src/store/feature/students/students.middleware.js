import * as AT from './../../types';
import {fetchStudents, setSaveStudentError} from './students.action';

const { STUDENTS } = AT;
export const studentsMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    switch (true) {
        case action.type.includes(`${STUDENTS} ${AT.FETCH_STUDENTS.SUCCESS}`): {
            const { data } = action.payload;
            dispatch([
                fetchStudents(data),
            ]);
        }
            break;

        case action.type.includes(`${STUDENTS} ${AT.FETCH_STUDENTS.ERROR}`): {
            dispatch(setSaveStudentError('error'));
        }
            break;

    }
};