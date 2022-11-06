import {GM,GN}from './message.action'
let initialState={
    message:"hello"
}
let messageReducer=(state=initialState,action)=>{
switch(action.type){
    case GM:
        return{message:"Good morning somthing make sense"}
    case GN:
        return{message:"Good night"}
    default:
        return state
}
};
export {messageReducer}