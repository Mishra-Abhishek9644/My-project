import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email: ""
}

export const formdataSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
  },
})

{/* <button onclick={incrementByAmount(5)}>5+</button> */}

// Action creators are generated for each case reducer function
export const { setFormData } = formdataSlice.actions

export default formdataSlice.reducer