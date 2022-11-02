import React, {Component} from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import {  Row, Col } from "reactstrap";
import Task from "../models/Task";


class TaskManager extends Component  {

  state = {
    tasks : [
      new Task(1, "code all day"),
      new Task(2, "Learn React"),
      new Task(3, "learn Ruby"),
      new Task(4, "Learn rails"),
      new Task(5, "Gym in the evening"),
      
    ]
  }
   
  

   addTask = (data) => {
    const task = new Task(
      this.state.tasks.length + 1,
      data.title,
      data.description
    )

   this.setState({
    tasks: [...this.state.tasks, task]
   })
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <TaskForm addTask={this.addTask}/>
          </Col>
          <Col>
          <h3>TaskList</h3>
           <TaskList  tasks={this.state.tasks}/> 
          </Col>
        </Row>
      </>
    );
  }
  
};

export default TaskManager;
