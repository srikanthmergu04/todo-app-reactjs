import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
