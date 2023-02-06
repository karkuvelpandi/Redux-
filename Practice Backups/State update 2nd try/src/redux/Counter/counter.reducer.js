import {INCR,DECR} from './counter.action'

let initialState={
    count:0
}
let counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCR : return {...state,count:state.count+1}
        case DECR : return {...state,count:state.count-1}
        default : return state
    }
}

export {counterReducer}