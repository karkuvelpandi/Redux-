import React from 'react'
import {useDispatch ,useSelector}from 'react-redux'
import {gmAction,gnAction}from '../redux/message/message.action'
const Message = () => {
let dispatch=useDispatch()
let message=useSelector((state)=>{
     return state.message
})
    let gmHandler=()=>{
       dispatch(gmAction())
    };
    let gnHandler=()=>{
        dispatch(gnAction())
    };
  return<>
  <h1>Message:{message.message}</h1>
  <button  onClick={gmHandler}>GM</button>
  <button  onClick={gnHandler}>GN</button>
  </>
}

export default Message