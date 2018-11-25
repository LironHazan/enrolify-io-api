import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';

class StudentForm extends React.Component {
    state = this.props.student;

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render () {
        return <div>
            <form className="flex-col">
                <label className="item">
                    <TextField
                        autoFocus
                        margin="dense"
                        name="fname"
                        label="First Name"
                        type="text"
                        fullWidth
                        defaultValue={this.state.fname}
                        onBlur={this.handleChange('fname')}/>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="lname"
                        label="Last Name"
                        type="text"
                        fullWidth
                        defaultValue={this.state.lname}
                        onBlur={this.handleChange('lname')}/>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        defaultValue={this.state.email}
                        onBlur={this.handleChange('email')}
                        fullWidth/>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="phone"
                        label="Phone number"
                        fullWidth
                        defaultValue={this.state.phone}
                        onBlur={this.handleChange('phone')}/>
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        name="bday"
                        type="date"
                        fullWidth
                        defaultValue={this.state.bday}
                        onBlur={this.handleChange('bday')}/> */}
                </label>
                <DialogActions>
                    <Button onClick={this.props.handleFormSubmit(this.state)}>
                        Save
                    </Button>
                    <Button onClick={this.props.close} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </div>
    }
}

StudentForm.propTypes = {
    student: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};

export default StudentForm;