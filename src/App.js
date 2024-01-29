
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Button from './Button';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todolist')) || [];
    const savedCompletedToDos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    setAllTodos(savedTodos);
    setCompletedTodos(savedCompletedToDos);
  }, []);

  const handleAddTodo = (newTodo) => {
    const updatedTodoArr = [...allTodos, newTodo];
    setAllTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  };

  const handleDeleteTodo = (index) => {
    const reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    setAllTodos(reducedTodos);
    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
  };

  const handleDeleteCompletedTodo = (index) => {
    const reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index, 1);
    setCompletedTodos(reducedCompletedTodos);
    localStorage.setItem('completedTodos', JSON.stringify(reducedCompletedTodos));
  };

  const handleCompleteTodo = (index) => {
    const updatedTodo = { ...allTodos[index] };
    const updatedCompletedList = [...completedTodos, updatedTodo];
    setCompletedTodos(updatedCompletedList);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedList));
    handleDeleteTodo(index);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="todo-wrapper">
        <TodoInput onAdd={handleAddTodo} />
        <div className="btn-area">
          <Button isActive={!isCompletedScreen} onClick={() => setIsCompletedScreen(false)}>
            To Do
          </Button>
          <Button isActive={isCompletedScreen} onClick={() => setIsCompletedScreen(true)}>
            Completed
          </Button>
        </div>
        <TodoList
          todos={isCompletedScreen ? completedTodos : allTodos}
          onDelete={isCompletedScreen ? handleDeleteCompletedTodo : handleDeleteTodo}
          onComplete={handleCompleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
