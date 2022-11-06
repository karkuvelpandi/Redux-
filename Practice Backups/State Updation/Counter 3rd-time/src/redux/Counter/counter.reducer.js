
import { INCR,DECR } from './counter.action'
let initialState={
  product_name:"books",
  qty:0
}

const counterReducer = (state=initialState,action) => {
  switch(action.type){
      case INCR:
        return{...state,qty:state.qty+1}
      case DECR:
        return{...state,qty:state.qty-1}
      default: 
      return state
      }
}

export default counterReducer