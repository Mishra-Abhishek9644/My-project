import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const initialState = {
  todos: savedTodos,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    completeTodo: (state, action) => {
      state.todos[action.payload].completed = !state.todos[action.payload].completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    editTodo: (state,action) => {
      const { index, newText } = action.payload;
      state.todos[index].text = newText;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
});

export const { addTodo, deleteTodo, completeTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;
