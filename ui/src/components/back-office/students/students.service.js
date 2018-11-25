import axios from 'axios';
const API = 'http://127.0.0.1:3000';

export const fetchStudents = async () => {
    try {
        const result = await axios.get(`${API}/students`);
        if (result) return result.data;
    } catch (err) {
        return err.message;
    }
};

export const saveStudents = async (student) => {
    try {
        const result = await axios.post(`${API}/students/add`, {fname: student.fname, 
            lname: student.lname, email: student.email, phone: student.phone});
        if (result) return result.data;
    } catch (err) {
        return err.message;
    }
};

export const editStudents = async (student) => {
    try {
        const result = await axios.post(`${API}/students/update`, {fname: student.fname, 
            lname: student.lname, email: student.email, phone: student.phone});
        if (result) return result.data;
    } catch (err) {
        return err.message;
    }
};