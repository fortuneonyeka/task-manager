import React, {Component} from 'react'
import {Form, FormGroup, Input, Label, Button, Col} from "reactstrap"

class TaskForm extends Component  {


  state = {
    titleErr: "",
    descriptionErr: "",
    title: "",
    description: ""
  }
   
    

  
 
   handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
   
    const {title, description} = this.state

//Validating the form inputs
if (title === "" || title.length < 5) {
  this.setState({
    titleErr:`title cannot be blank or less than five (${5}) characters`
  }) 
 
  valid = false
}

if (description === "" || description.length < 10) {
  this.setState({
    descriptionErr:`Description cannot be blank or less than ten (${(10)}) characters`
  
  })
 
  valid = false
}

    if (valid) {
      const data = {
        title,
        description
      }
        this.props.addTask(data)

        //setting the input state back to blank after submission
      this.setState(
        {
          title:"",
          description:"",
          titleErr:"",
          descriptionErr:""
        }
      )
      
    }
      
    }


//Styling the error messages
     errStyle = {
      color:"red",
      fontSize:"12px"
    }
          handleChange = (e) => {
            this.setState({
              [e.target.id]: e.target.value,
              [e.target.id + "Err"]: ""
            })
          }


    render() {
      const {titleErr, descriptionErr, title, description} = this.state
      return (
        <Form onSubmit={this.handleSubmit} >
           <FormGroup row>
             <Label htmlFor="title"><h4>Title</h4></Label>
             <Col sm={8}>
             <Input id="title" type="text" placeholder="Task Titile" value={title}  onChange={this.handleChange}/>
             </Col>
             <span id="titleErr" style={this.errStyle}>{titleErr}</span>
           </FormGroup>
           <FormGroup>
             <Label htmlFor="description"><h4>Description</h4></Label>
             <Col sm={8}>
             <Input id="description" type="textarea" placeholder="Task Description" rows="5" value={description} onChange={this.handleChange}/>
             </Col>
             <span id="descriptionErr" style={this.errStyle}>{descriptionErr}</span>
           </FormGroup>
     
           <Button outline color="success" size="lg" >Add Task</Button>
        </Form>
        
       )
    }
  
}

export default TaskForm