import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import { TodoContext } from "./TodoContext";

const NewTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const [task, setTask] = useState("");

  const addNewTodo = (e) => {
    setTask(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();
    if (task !== "") {
      setTodos([...todos, { task: task }]);
      setTask("");
    }
  };

  return (
    <Form className="newTodo">
      <div className="todo-input-box">
        <Form.Group controlId="task">
          <Form.Control
            type="text"
            placeholder="New Todo"
            name="task"
            value={task}
            onChange={addNewTodo}
          />
        </Form.Group>
      </div>
      <div>
        <Button
          className="addTodoBtn"
          variant="primary"
          type="submit"
          onClick={createTodo}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default NewTodo;
