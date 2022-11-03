import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Col, Row } from "reactstrap";
import FormControl from "../formControl/FormControl";
import User from "../models/User"

class Login extends Component {

   state = {
    users : [
      new User("Fortune", "123456"),
      
      
    ]
  }


  addUser = (data) => {
    const user = new User(
      this.state.users.length + 1,
      data.username,
      data.password
    )

   this.setState({
    users: [...this.state.users, user]
   })
  }


  handleSubmit = (e) => {
     e.preventDefault() 
     
  }

  handleChange = (e) => {
  
  //  this.setState({e.target.value})
  }
  render() {
   
    const {username, password} = this.state
    return (
      <Row>
        <Col md={5}>
          <Form className="login-container" onSubmit={this.handleSubmit} >
            <FormControl label="username" type="text" id="username" placeholder="Username" value={username}/>
            <FormControl label="password" type="password" id="password" placeholder="password" value={password}/>
            
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
