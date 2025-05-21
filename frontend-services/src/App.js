import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SummaryButton from "./components/SummaryButton";
import { getTodos, addTodo, deleteTodo } from "./services/api";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    console.log(data);
    setTodos(data);
  };

  const handleAddTodo = async (text) => {
    await addTodo(text);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    console.log("Deleting todo with id:", id);
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="app">
      <h1>Todo Summary Assistant</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
      <SummaryButton todos={todos} />
    </div>
  );
}

export default App;
