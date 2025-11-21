import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
        state.todos = state.todos.filter((_,index)=> index !== action.payload);
    },
     completeTodo: (state, action) => {
      state.todos[action.payload].completed = true;
    }
  },
})

{/* <button onclick={incrementByAmount(5)}>5+</button> */}

// Action creators are generated for each case reducer function
export const { addTodo,deleteTodo,completeTodo } = todoSlice.actions

export default todoSlice.reducer