
import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddNewToDo = () => {
    onAdd({ title: newTodoTitle, description: newDescription });
    setNewDescription('');
    setNewTodoTitle('');
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title:</label>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="What's the title of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <button className="primary-btn" type="button" onClick={handleAddNewToDo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
