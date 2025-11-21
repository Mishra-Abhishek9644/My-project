import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../store/slices/counterSlice'
import formdataSlice from '../store/slices/formdataSlice'
import todoSlice from '../store/slices/todoSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    form:formdataSlice,
    todos:todoSlice,
  },
})