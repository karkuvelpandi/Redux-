
import {INCR,DECR}from './counter.action'
let initialState={
    product_Name:"Iphone",
    qty:0
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