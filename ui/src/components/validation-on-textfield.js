import React from 'react';
import TextField from '@material-ui/core/TextField';

 const  textFieldWithValidations = (TextField) =>{
    return class extends React.Component {
      render() {
        return <TextField 
        required
        {...this.props} />;
      }
    }
  }
const TextFieldWithValidations = textFieldWithValidations(TextField);
export default TextFieldWithValidations;