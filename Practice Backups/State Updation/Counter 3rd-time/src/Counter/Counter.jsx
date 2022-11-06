import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import { incrAction } from '../redux/Counter/counter.action'
import { decrAction } from '../redux/Counter/counter.action'
const Counter = () => {
    let dispatch=useDispatch()
    let counter=useSelector((state)=>{
          return state
    })
 let incrHandler=()=>{
    dispatch(incrAction())
 };
 let decrHandler=()=>{
 dispatch(decrAction())
 };
  return <>
    <div>
        <h1>Counter:{counter.qty}</h1>
        <button onClick={incrHandler}>Increment</button><button onClick={decrHandler}>Decrement</button>
    </div>
    </>
}

export default Counter