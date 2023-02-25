import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addDataAction}from './login.action/login.action'
const Login = () => {
   let [formdata,setFormdata]=useState({
       email:"",
       password:""
   })
   let changeData= (event)=>{setFormdata({...formdata,[event.target.name]:event.target.value})}

//dispatch 
   let dispatch=useDispatch()
   let dispatchData=()=>{
       dispatch(addDataAction(formdata))
   }
   

  return <>
  <pre>{JSON.stringify(formdata)}</pre>
  <br />
  <form action="">
     email<input type="email" name='email' onChange={changeData} />
     password<input type="password" name='password'  onChange={changeData} />
     <input type="submit" onClick={dispatchData} />
     </form>
  </>
}

export default Login