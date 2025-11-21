import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, completeTodo } from "../store/slices/todoSlice";
const Todo = () => {
 
  const [inputValue, setInputValue] = useState("");

  
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();


  const AddTodo = () => {
   dispatch(addTodo({ text: inputValue, completed: false }));
    setInputValue("");
  };

  const DeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const CompleteTodo = (index) => {
    dispatch(completeTodo(index))
  };

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={AddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ 
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "green" : "black"
            }}>
              {todo.text}
            </span>

            {!todo.completed && (
              <button onClick={() => CompleteTodo(index)}>Complete</button>
            )}

            <button onClick={() => DeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
