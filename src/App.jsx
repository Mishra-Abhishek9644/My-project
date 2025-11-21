import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counterSlice'
import Form from './components/Form'
import Counter from './components/Counter'
import Todo from './components/Todo'
function App() {
 
  // const { name, email } = useSelector((state) => state.form);
  


  return (
    <>
      {/* <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Form</h1>
      <Form />
      <div>
        <h1>Form Data</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div> */}
      <Todo />
    </>
  )
}

export default App
