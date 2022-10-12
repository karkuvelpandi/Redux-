import React from 'react'
import {gmAction,gnAction}from './redux/message/message.action'
import {useDispatch,useSelector} from "react-redux"
let Message=()=>{
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
       return state.message
    })
let gmHandler=()=>{
   dispatch(gmAction())
};
let gnHandler=()=>{
    dispatch(gnAction())
}
   return<>
   <h1>Message:{message}</h1>
   <button className="btn btn-success" onClick={gmHandler}>GM</button>
   <button className="btn btn-danger"onClick={gnHandler}>GN</button>
   </>
};
export {Message}