import React from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import {  Row, Col } from "reactstrap";
import Task from "../models/Task";

const TaskManager = () => {
  const tasks = [
    new Task(1, "code all day"),
    new Task(2, "Learn React"),
    new Task(3, "learn Ruby"),
    new Task(4, "Learn rails"),
    new Task(5, "Gym in the evening"),
    
  ];
  return (
    <>
      <Row>
        <Col>
          <TaskForm />
        </Col>
        <Col>
        <h3>TaskList</h3>
         <TaskList  tasks={tasks}/> 
        </Col>
      </Row>
    </>
  );
};

export default TaskManager;
