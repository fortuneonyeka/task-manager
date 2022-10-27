import React from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import {  Row, Col } from "reactstrap";

const TaskManager = (props) => {
  return (
    <>
      <Row>
        <Col>
          <TaskForm />
        </Col>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </>
  );
};

export default TaskManager;
