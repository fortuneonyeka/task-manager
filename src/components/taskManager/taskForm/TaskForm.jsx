import React from "react";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { addAction } from "../../../Redux/actions/TaskManagerActions";
import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    //Validating the form inputs
    if (title === "" || title.length < 5) {
      setTitleErr(`title cannot be blank or less than five (${5}) characters`);

      valid = false;
    }

    if (description === "" || description.length < 10) {
      setDescriptionErr(
        `Description cannot be blank or less than ten (${10}) characters`
      );

      valid = false;
    }

    if (valid) {
      const data = {title, description}
      
     
      dispatch(addAction(data));

      //setting the input state back to blank after submission
      setTitle("");
      setDescription("");
      setTitleErr("");
      setDescriptionErr("");
    }
  };

  //Styling the error messages
  const errStyle = {
    color: "red",
    fontSize: "12px",
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label htmlFor="title">
          <h4>Title</h4>
        </Label>
        <Col sm={8}>
          <Input
            id="title"
            type="text"
            placeholder="Task Titile"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Col>
        <span id="titleErr" style={errStyle}>
          {titleErr}
        </span>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">
          <h4>Description</h4>
        </Label>
        <Col sm={8}>
          <Input
            id="description"
            type="textarea"
            placeholder="Task Description"
            rows="5"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Col>
        <span id="descriptionErr" style={errStyle}>
          {descriptionErr}
        </span>
      </FormGroup>

      <Button outline color="success" size="lg">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
