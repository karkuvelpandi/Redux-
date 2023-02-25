import React from 'react'
import { incrAction, decrAction } from "../redux/counter/counter.action.js"
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    let dispatch = useDispatch()
let counter=useSelector((state)=>{
    return state.count
})
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())
    }


    return <>
    <pre>{JSON.stringify(counter)}</pre>
        <div style={{ fontSize: "3rem" }}>Counter : {counter}</div>
        <button onClick={incrHandler}>incr</button>
        <button onClick={decrHandler}>decr</button>
    </>
}

export default Counter