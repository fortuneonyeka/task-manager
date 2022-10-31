import React from "react";
import TaskItem from "./taskItem/TaskItem";
import { ListGroup} from "reactstrap";


const TaskList = ({task}) => {
  


  return (
    <ListGroup>
      
       <TaskItem key={task.id} task={task}/>
    </ListGroup>
  );
};

export default TaskList;
