import React, {Component} from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import {  Row, Col } from "reactstrap";
import Task from "../models/Task";
import {useDispatch} from "react-redux"
import {addAction} from "../../Redux/actions/TaskManagerActions"
class TaskManager extends Component  {

  // taskAll = useSelector(state => state.tasks)
  // dispatch = useDispatch()
  
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
        <Row className="task-manager-container">
          <Col>
            <TaskForm />
          </Col>
          <Col>
          <h3>TaskList</h3>
           <TaskList /> 
          </Col>
        </Row>
      </>
    );
  }
  
};

export default TaskManager;
