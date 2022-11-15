//In this component we are directly using react usestate method to change the state 

import React from 'react'
import {useState} from "react";
function Counter() {
    const [count , setCount]= useState(0);
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <span>Count: {count}</span>
        <button onClick={()=>{setCount(count-1)}}>-</button>
    </div>
  )
}

export default Counter
