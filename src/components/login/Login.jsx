import React, { Component } from "react";
import { Form, Button, Col, Row } from "reactstrap";
import FormControl from "../formControl/FormControl";
// import User from "../models/User"

class Login extends Component {

   state = {
    data : {
      username:"",
      password:""
    },
    errors:{}
  }


 loginValidation = () => {
  const {data} = this.state
  console.log(data.username);

  const errors = {}

  if (data.username === "") {
    errors.username = "Username cannot be blank"
  }

  if (data.password === "" || data.password.length < 5) {
    errors.password = `password cannot be black or less than five (${5}) characters`
  }


  return errors
 }

  handleSubmit = (e) => {
     e.preventDefault() 
     const errors = this.loginValidation()
     if (Object.keys(errors).length === 0) {
      console.log(this.state.data);
      this.setState({
        data : {
          username:"",
          password:""
        },
        errors: {}
      })
     }else {
      this.setState({errors})
     }
     
  }

  handleChange = (e) => {
  
   this.setState({
    data:{
        ...this.state.data,
      [e.target.id]: e.target.value
    },
    errors:{
      ...this.state.errors,
      // [e.target.id]: e.target.value,
      
    }
   })
  }
  render() {
   
    const {data, errors} = this.state
    return (
      <Row>
        <Col md={5}>
          <Form className="login-container" onSubmit={this.handleSubmit} >
            <FormControl label="username" type="text" id="username" placeholder="Username" value={data.username} handleChange={this.handleChange} error={errors.username}/>
            <FormControl label="password" type="password" id="password" placeholder="password" value={data.password} handleChange={this.handleChange} error={errors.password}/>
            
            <Button outline color="success" size="lg">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Login;
