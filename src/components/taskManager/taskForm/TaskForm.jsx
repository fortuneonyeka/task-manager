import React from 'react'
import {Form, FormGroup, Input, Label, Button, Col} from "reactstrap"

const TaskForm = () => {
  return (
   

   <Form>
      <FormGroup row>
        <Label htmlFor="title"><h4>Title</h4></Label>
        <Col sm={8}>
        <Input id="title" type="text" placeholder="Task Titile"/>
        </Col>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description"><h4>Description</h4></Label>
        <Col sm={8}>
        <Input id="<h4></h4>" type="textarea" placeholder="Task Description" rows="5"/>
        </Col>
      </FormGroup>

      <Button outline color="success" size="lg">Add Task</Button>
   </Form>
   
  )
}

export default TaskForm