import { USER_FAILURE,USER_REQ,USER_SUCCESS } from "./user.action";
let initialState={
    users:[],
    errorMsg:"",
    loading:false
}
let userReducer=(state=initialState,action)=>{
       let {type,payload}=action
    switch (type){
        case USER_REQ:
            return {...state,loading:true}
        case USER_SUCCESS:
            return {...state,users:payload}
        case USER_FAILURE:
            return{...state, errorMsg:payload,loading:false}
        default :
           return state
    }
};
export {userReducer}