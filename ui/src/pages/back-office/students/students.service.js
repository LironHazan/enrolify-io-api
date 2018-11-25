import axios from 'axios';
const API = 'http://127.0.0.1:3000';

export const fetchStudents = () => {
    return axios.get(`${API}/students`);
};

export const saveStudents = (student) => {
    return axios.post(`${API}/students/add`, {fname: student.fname, 
        lname: student.lname, email: student.email, phone: student.phone});
};

export const editStudents = (student) => {
    return axios.post(`${API}/students/update`, {fname: student.fname, 
        lname: student.lname, email: student.email, phone: student.phone});
};