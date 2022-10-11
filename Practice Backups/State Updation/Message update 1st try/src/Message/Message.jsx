import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { gmAction, gnAction } from '../redux/Message/message.action'


let Message = () => {
    let dispatch = useDispatch()
    let message = useSelector((state) => {
        return state;
    })
    let gmHandler = () => {
        dispatch(gmAction())
    };
    let gnHandler = () => {
        dispatch(gnAction())
    };

    return <>
        <h1>Message:{message.wish} </h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </>
};
export { Message }