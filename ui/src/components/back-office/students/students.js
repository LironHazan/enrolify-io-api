import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {fetchStudents,
    saveStudent,
    toggleDialog,
    editStudent,
    setSaveStudentError} from '../../../store/actions/students';
import StudentsList  from './students-list'
import StudentForm from "../forms/student-form";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Students extends React.Component {

    componentDidMount() {
        this.props.fetchStudents();
    }

    handleOpen = () => {
        this.props.toggleDialog(true);
    };

    handleClose = () => {
        this.props.toggleDialog(false);
        this.cleanupErr();
    };

    cleanupErr() {
        this.props.setSaveStudentError({message: null});
    }

    onStudentAdd = (student) => (event) => {
        event.preventDefault();
        this.props.saveStudent(student);
    };

    renderStudents = (students) => {
        return students.map(student =>
            (<StudentsList key={student._id}
                           student={student}
                           editStudentAction={this.props.editStudentAction}/>))
    };

    render() {
        const { open, error, students } = this.props.store;
        return (
            <div>
                <Button onClick={this.handleOpen}> + Add new student</Button>
                { open && (<Dialog open={open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Student info</DialogTitle>
                    <DialogContent>
                        {error && <div> {error} </div>}
                        <StudentForm handleFormSubmit={this.onStudentAdd}
                                     close={this.handleClose}
                                     student={{fname: '', lname: '', email: '', phone: '', bday: ''}}/>
                    </DialogContent>
                </Dialog>) }
                    {students.length > 0 && this.renderStudents(students)}
            </div>
        );
    }
}

export default connect( state => ({ //mapping state to props
    store: state.students,
}), { fetchStudents, saveStudent, toggleDialog, editStudentAction: editStudent, setSaveStudentError })(Students);

