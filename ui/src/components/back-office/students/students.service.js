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