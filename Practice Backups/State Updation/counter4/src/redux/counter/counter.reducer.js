import {INCR,DECR}from "./counter.action"

let initialState={
    
      name:"phones",
      count:1
}
let counterReducer=(state=initialState,action)=>{
     switch(action.type){
        case INCR:{
            return {...state,count:state.count+1}
        }
        case DECR:{
            return {...state,count:state.count-1}
        }
        default:
           return state
     }
};
export {counterReducer}