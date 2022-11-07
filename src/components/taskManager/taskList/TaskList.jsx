import React from "react";
import TaskItem from "./taskItem/TaskItem";
import { ListGroup, Alert } from "reactstrap";

const TaskList = ({ tasks }) => {
 
  if (tasks.length === 0) {
    return <Alert>Task List is empty</Alert>;
  }

  return (
    <ListGroup>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListGroup>
  );
};

export default TaskList;
