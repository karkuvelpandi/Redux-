import { INCR,DECR } from "./counter.action";
let initialState={
    p_name:"iphone",
    qty:1
}
let counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCR:
            return {...state,qty:state.qty+1}
            case DECR:
            return {...state,qty:state.qty-1}
            default :
            return state
    }
};
export {counterReducer}