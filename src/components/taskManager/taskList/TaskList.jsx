import React from "react";
import TaskItem from "./taskItem/TaskItem";
import { ListGroup, Badge, Button } from "reactstrap";
import Task from "../../models/Task";

const TaskList = () => {
  const tasks = [
    new Task(1, "code all day"),
    new Task(2, "Learn React"),
    new Task(3, "learn Ruby"),
    new Task(4, "Learn rails"),
    new Task(5, "Gym in the evening"),
  ];

  const allTasks = tasks.map((task) => {
    return (
      <div key={task.id}>
        {task.title}

        <Badge className="mx-3" color="success" pill>
          14
        </Badge>
        <Button close />
      </div>
    );
  });

  return (
    <ListGroup>
      <h3>TaskList</h3>
      <TaskItem allTasks={allTasks} />
    </ListGroup>
  );
};

export default TaskList;
