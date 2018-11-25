import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

import StudentForm from "../forms/student-form";

class StudentsList extends React.Component {
    state = {open: false};

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleEditFormSubmit = (student) => (event) => {
        this.props.editStudentAction(student);
    };

    // renderError = () => {
    //     return <div> {this.props.error} </div>
    // };

    render() {
        const { student } = this.props;
        return <div>
            <ListItem  button >
                <ListItemText primary={student.fname} />
                <ListItemIcon onClick={this.handleOpen}><PermContactCalendar /></ListItemIcon>
            </ListItem>
            <Divider />
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Student info</DialogTitle>
                <DialogContent>
                    <StudentForm handleFormSubmit={this.handleEditFormSubmit}
                                 close={this.handleClose}
                                 student={student}/>
                </DialogContent>
            </Dialog>
        </div>

    }
}

StudentsList.propTypes = {
    editStudentAction: PropTypes.func,
    student: PropTypes.object
};

export default StudentsList;
