import React from "react";
import { ListGroupItem, CloseButton } from "reactstrap";

const TaskItem = ({ task }) => {

  return (
    <>
      <ListGroupItem>
        {task.title}
        <CloseButton className="float-end bg-danger p-2" />
      </ListGroupItem>
    </>
  );
};

export default TaskItem;
