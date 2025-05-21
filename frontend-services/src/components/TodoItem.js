import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      {todo.task}

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;
