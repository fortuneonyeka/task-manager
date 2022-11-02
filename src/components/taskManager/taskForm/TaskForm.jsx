import React, {Component} from 'react'
import {Form, FormGroup, Input, Label, Button, Col} from "reactstrap"

class TaskForm extends Component  {


  state = {
    titleError: "",
    descriptionErr: ""
  }
   
    

  
 
   handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    const title = document.getElementById("title")
    const description = document.getElementById("description")


if (title.value === "" || title.value.length < 5) {
  this.setState({
    titleError:`title cannot be blank or less than five (${5}) characters`
  }) 
 
  valid = false
}

if (description.value === "" || description.value.length < 10) {
  this.setState({
    descriptionErr:`Description cannot be blank or less than ten (${(10)}) characters`
  
  })
 
  valid = false
}

    if (valid) {
      const data = {
        title:title.value,
        description:description.value
      }
        this.props.addTask(data)

      this.setState(
        {
          
          titleError:"",
          descriptionErr:""
        }
      )
      
    }
      
    }



     errStyle = {
      color:"red",
      fontSize:"12px"
    }

    render() {
      const {titleError, descriptionErr} = this.state
      return (
        <Form onSubmit={this.handleSubmit}>
           <FormGroup row>
             <Label htmlFor="title"><h4>Title</h4></Label>
             <Col sm={8}>
             <Input id="title" type="text" placeholder="Task Titile"/>
             </Col>
             <span id="titleErr" style={this.errStyle}>{titleError}</span>
           </FormGroup>
           <FormGroup>
             <Label htmlFor="description"><h4>Description</h4></Label>
             <Col sm={8}>
             <Input id="description" type="textarea" placeholder="Task Description" rows="5"/>
             </Col>
             <span id="descriptionErr" style={this.errStyle}>{descriptionErr}</span>
           </FormGroup>
     
           <Button outline color="success" size="lg" >Add Task</Button>
        </Form>
        
       )
    }
  
}

export default TaskForm