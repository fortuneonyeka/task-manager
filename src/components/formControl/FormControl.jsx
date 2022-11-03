import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";


const FormControl = ({ label, type, placeholder, value, error }) => {
  const name = label.toLowerCase()
  
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} id={name}/>
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};

export default FormControl;
