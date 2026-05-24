import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';
import './App.css'

function App() {
  //Отримуємо поточне значення лічильника зі store
  const count = useSelector((state) => state.counter.value);

  //Отримуємо функцію dispatch для відправки екшенів
  const dispatch = useDispatch();

  return (
    <>
    <h2 className='countTitle'>count: {count}</h2>
    <button onClick={() => dispatch(increment())} type="button" className='incrementButton'>Increment 10$</button>
    <button onClick={() => dispatch(decrement())} type="button" className='decrementButton'>Decrement 10$</button>
    <button onClick={() => dispatch(incrementByAmount(5))} type="button" className='incrementByAmount'>Add 5$</button>
      </>
  )
}

export default App
