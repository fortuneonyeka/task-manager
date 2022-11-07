import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";


const FormControl = ({ label, type, placeholder, value, error, handleChange }) => {
  const name = label.toLowerCase()
  
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} invalid={!!error} value={value} id={name} onChange={handleChange}/>
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};

export default FormControl;
