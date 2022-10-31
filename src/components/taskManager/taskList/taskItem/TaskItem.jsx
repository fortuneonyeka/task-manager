import React from "react";
import { ListGroupItem, CloseButton } from "reactstrap";

const TaskItem = ({task}) => {
 return(
  <ListGroupItem>
   
    {task.title}
    <CloseButton className="float-end"/>
    </ListGroupItem> 
 )
};

export default TaskItem;
