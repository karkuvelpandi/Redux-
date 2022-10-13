import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/counter/counter.action'
let Counter = () => {
    let dispatch = useDispatch()
    let Quantity=useSelector((state)=>{
             if(state.qty<=0){
                return state.qty=0
             }
             else{
                return state
             }
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