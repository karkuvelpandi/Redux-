import React from 'react'
import { useDispatch,useSelector } from "react-redux"
import { incrAction, decrAction } from "../redux/counter/counter.action"

const Counter = () => {
  let dispatch = useDispatch()
let counter=useSelector((state)=>{
   return  state.count
})
  let incrHandler = () => {
    dispatch(incrAction())
  }
  let decrHandler = () => {
    dispatch(decrAction())
  }
  return <>
    <h1>Counter:{counter.qty}</h1>
    
    <button  onClick={incrHandler}>INCR</button>
    {counter.qty<=0?<button disabled  onClick={decrHandler}>DECR</button>:<button  onClick={decrHandler}>DECR</button>}
  </>
}

export default Counter

