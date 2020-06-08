import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import { TodoProvider } from "./TodoContext";
function App() {
  return (
    <div className="App">
      <TodoProvider>
        <NewTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
