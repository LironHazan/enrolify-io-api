import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import TextFieldWithValidations from '../../../components/validation-on-textfield'

class StudentForm extends React.Component {
    state = this.props.student;

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render () {
        return <div>
            <form className="flex-col" onSubmit={this.props.handleFormSubmit(this.state)}>
                <label className="item">
                    <TextFieldWithValidations
                        autoFocus
                        margin="dense"
                        name="fname"
                        label="First Name"
                        type="text"
                        fullWidth
                        defaultValue={this.state.fname}
                        onChange={this.handleChange('fname')}/>
                    <TextFieldWithValidations
                        autoFocus
                        margin="dense"
                        name="lname"
                        label="Last Name"
                        type="text"
                        fullWidth
                        defaultValue={this.state.lname}
                        onChange={this.handleChange('lname')}/>
                    <TextFieldWithValidations
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        defaultValue={this.state.email}
                        onChange={this.handleChange('email')}
                        fullWidth/>
                    <TextFieldWithValidations
                        autoFocus
                        margin="dense"
                        name="phone"
                        label="Phone number"
                        fullWidth
                        defaultValue={this.state.phone}
                        onChange={this.handleChange('phone')}/>
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
                    <Button type="submit">
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