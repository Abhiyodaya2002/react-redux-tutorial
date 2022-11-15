import React from 'react'
import {useSelector}  from "react-redux"
function Coin() {
    const coin=useSelector((state)=>{
       return state.counter.count;
    })
    const themTextColor=useSelector((state)=>{
      return state.theme.color;
    })
  return (
    <div>
      <span style={{color:themTextColor}}>coin: {coin}</span>
    </div>
  )
}

export default Coin
