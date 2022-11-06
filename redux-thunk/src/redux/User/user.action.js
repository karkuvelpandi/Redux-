import Axios from 'axios'

let USER_REQ="USER_REQ"
let USER_SUCCESS="USER_SUCCESS"
let USER_FAILURE="USER_FAILURE"

//Normal Action
let fetchUserRequest=()=>{
 return {type:USER_REQ}
};
let fetchUserSuccess=(users)=>{
  return {type:USER_SUCCESS,payload: users}
};
let fetchUserFailure=(err)=>{
 return {type:USER_FAILURE,payload:err}
};

//special action
let fetchUserAction=()=>{
        return (dispatch)=>{
        dispatch(fetchUserRequest())
        Axios.get("https://jsonplaceholder.typicode.com/users")
         .then((response)=>{
            dispatch(fetchUserSuccess(response.data))
        })
        .catch((err)=>{ fetchUserFailure(err) })
        };
};
export{fetchUserAction,USER_FAILURE,USER_REQ,USER_SUCCESS}