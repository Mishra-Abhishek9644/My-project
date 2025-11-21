import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/slices/counterSlice'

const Counter = () => {
     const dispatch = useDispatch();
  const storeCountValue = useSelector((state) => state.counter.value);
  return (
   <>
         <h1>count is {storeCountValue}</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>
          -
        </button><br />
        <button onClick={() => dispatch(increment())}>
          +
        </button><br />
        <button onClick={() => dispatch(incrementByAmount(5))}>
          5+
        </button><br />


      </div>
   </>
  )
}

export default Counter