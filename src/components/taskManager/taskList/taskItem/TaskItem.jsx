import React from "react";
import { ListGroupItem, CloseButton } from "reactstrap";
import { useDispatch } from "react-redux";
import {deleteAction}  from "../../../../Redux/actions/TaskManagerActions";


const TaskItem = ({ task }) => {
  const dispatch = useDispatch()

  
  const handleDelete = () => {
    const id  = task.id
    dispatch(deleteAction(id));
    
  }
  return (
    <>
      <ListGroupItem>
        {task.title}
        <CloseButton className="float-end bg-danger p-2" onClick={handleDelete}/>
      </ListGroupItem>
    </>
  );
};

export default TaskItem;
