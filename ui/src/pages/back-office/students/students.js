import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    fetchStudents as fetchStudentsAction,
    saveStudent as saveStudentsAction,
    editStudent as editStudentAction,
    toggleDialog} from '../../../store/feature/students/students.action';
import StudentsList  from './students-list'
import StudentForm from "../forms/student-form";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Students extends React.Component {
    state = {student: {fname: '', lname: '', email: '', phone: '', bday: ''}};

    componentDidMount() {
        this.props.fetchStudentsAction();
        document.addEventListener('keydown', this.onKeyDown);
    }

     onKeyDown = event => event.keyCode === 32 &&  event.preventDefault();

    handleOpen = (student = {fname: '', lname: '', email: '', phone: '', bday: ''}) => () => {
        this.student = student;
        this.props.toggleDialog(true);
    };

    handleClose = () => {
        this.props.toggleDialog(false);
    };

    onStudentFormSubmit = (student) => (event) => {
        if (!student._id) return this.props.saveStudentsAction(student);
        this.props.editStudentAction(student);
    };

    renderStudents = (students) => {
        return students.map(student =>
            (<StudentsList key={student._id}
                           student={student}
                           handleOpen={this.handleOpen}/>))
    };

    render() {
        const { open, error, students } = this.props.store;
        return (
            <div>
                <Button onClick={this.handleOpen()}> + Add new student</Button>
                { open && 
                (<Dialog open={open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Student info</DialogTitle>
                    <DialogContent>
                        {error && <div> {error} </div>}
                        <StudentForm handleFormSubmit={this.onStudentFormSubmit}
                                     close={this.handleClose}
                                     student={this.student}/>
                    </DialogContent>
                </Dialog>) }
                    {students.length > 0 && this.renderStudents(students)}
            </div>
        );
    }
}

export default connect( state => ({ 
    store: state.students,
}), { fetchStudentsAction, 
    saveStudentsAction, 
    toggleDialog, 
    editStudentAction })(Students);


