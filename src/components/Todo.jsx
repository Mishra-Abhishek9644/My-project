import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, completeTodo,editTodo } from "../store/slices/todoSlice";
const Todo = () => {
 
  const [inputValue, setInputValue] = useState("");

  
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();


  const AddTodo = () => {
    if (inputValue.trim() === "") return;
   dispatch(addTodo({ text: inputValue, completed: false }));
    setInputValue("");
  };

  const DeleteTodo = (index) => {
    const shouldDelete = confirm("Are you sure you want to delete this todo?");
    if (shouldDelete) {
      dispatch(deleteTodo(index));
    }
  };

  const CompleteTodo = (index) => {
    dispatch(completeTodo(index))
  };
  const EditTodo = (index, newText) => {
    dispatch(editTodo({ index, newText }));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-purple-500 min-h-screen" >
     <div className='w-1/2  flex justify-center flex-col items-center m-8 p-4 pb-4 border rounded-lg bg-gray-100 border-purple-500 gap-4'> 
       <h2 className='flex bg-center p-4 text-3xl font-bold align-middle text-purple-500'>Todo List</h2>

      <div className='flex justify-between gap-2 w-full'><input
        type="text"
        placeholder="Enter Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && AddTodo()}
        className='p-4 rounded-2xl border-purple-500 border-2 flex-1'
      />

      <button onClick={AddTodo} className='p-3 rounded-2xl font-bold border-purple-500 bg-white border-2 text-purple-500'>Add Todo</button></div>

      <ul className='flex-col text-md text-purple-500 font-semibold gap-4 flex w-full'>
        {todos.map((todo, index) => (
          <li key={index} className='flex gap-4 items-center justify-between p-4 border-2 rounded-2xl border-purple-500'>
            <span style={{ 
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "green" : "black"
            }}>
              {todo.text}
            </span>

            <div>
              {!todo.completed && (
              <button onClick={() => CompleteTodo(index)} className='p-3 rounded-2xl font-bold border-purple-500 bg-white border-2 text-purple-500 m-2'>Complete</button>
            )}
            {todo.completed && (
              <button onClick={() => CompleteTodo(index)} className='p-3 rounded-2xl font-bold border-purple-500 bg-white border-2 text-purple-500 m-2'>Undo</button>
            )}

              <button onClick={() => EditTodo(index, prompt("Edit todo:", todo.text))} className='p-3 rounded-2xl font-bold border-purple-500 bg-white border-2 text-purple-500 m-2'>Edit</button>
            <button onClick={() => DeleteTodo(index)} className='p-3 rounded-2xl font-bold border-purple-500 bg-white border-2 text-purple-500'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
};

export default Todo;
