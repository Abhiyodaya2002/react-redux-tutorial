import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {decrement,increment,incrementByAmount} from "./counterSlice"
function Counter() {
    const count = useSelector((state) =>{ return state.counter.count})
    // Note that the counter coming in state.counter.count is from store.js
    const themTextColor =useSelector((state)=>{
      return state.theme.color;
    })
   const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>{dispatch(increment())}} >+</button>
        <span style={{color:themTextColor}}>Count: {count}</span>
        <button onClick={()=>{dispatch(decrement())}}>-</button>

        <button onClick={()=>{dispatch(incrementByAmount(10))}}>increment by 10</button>
    </div>
  )
}

export default Counter
