import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import './textfield.scss'

 const  textFieldWithValidations = (TextField) =>{
    return class extends React.PureComponent {
      render() {
        const classes = classNames({'err': this.props.err})
        return <TextField 
        className={classes}
        fullWidth
        margin="dense"
        required
        {...this.props} />;
      }
    }
  }
const TextFieldWithValidations = textFieldWithValidations(TextField);
export default TextFieldWithValidations;