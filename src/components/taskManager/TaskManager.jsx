import React from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import { Row, Col } from "reactstrap";

const TaskManager = () => {
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
};

export default TaskManager;
