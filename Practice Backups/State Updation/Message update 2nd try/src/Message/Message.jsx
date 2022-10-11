import { useDispatch,useSelector } from "react-redux";
import{gmAction,gnAction}from '../redux/message/message.action'


let Message = () => {
    let message=useSelector((state)=>{
         return state
    })
    let dispatch = useDispatch()
    let gmHandler = () => {
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return <>
    <br />
    <h1>Message: {message.message}</h1>
        <button className="btn btn-primary" onClick={gmHandler}>GM</button>
        <button className="btn btn-primary" onClick={gnHandler}>Gn</button>
    </>
};
export { Message }