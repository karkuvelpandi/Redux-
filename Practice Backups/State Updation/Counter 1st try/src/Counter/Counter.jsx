import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/counter/counter.action'
let Counter = () => {
    let dispatch = useDispatch()
    let Quantity=useSelector((state)=>{
             return state.qty
    })
    let incrHandler = () => {
        dispatch(incrAction())
    };
    let decrHandler = () => {
        dispatch(decrAction())
    };
    return <>
        <h1>Quandity: {Quantity}</h1>
        <button onClick={incrHandler}>INCR</button>
        <button onClick={decrHandler}>DECR</button>
    </>
};
export default Counter 