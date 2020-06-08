import React from "react";
import "./App.css";

const Todo = ({ todo }) => {
  return <li className="todo">{todo.task}</li>;
};

export default Todo;
