// TodoList will be displayed after completed

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onComplete }) {
  return (
    <div className="todo-list">
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onDelete={() => onDelete(index)}
          onComplete={() => onComplete(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
