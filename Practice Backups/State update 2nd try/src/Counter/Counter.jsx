import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../redux/Counter/counter.action'

const Counter = () => {
   let dispatch=useDispatch()

   let counter=useSelector((state)=>{
      return state
   })

  
let incrHandler=()=>{
   dispatch(incrAction())
}
let decrHandler=()=>{
   dispatch(decrAction())
}
    
  return<>
  <h2>{counter.count}</h2>
  <button onClick={incrHandler}>increment</button>
  <button onClick={decrHandler}>decrement</button>
     
  
  </>
}

export default Counter