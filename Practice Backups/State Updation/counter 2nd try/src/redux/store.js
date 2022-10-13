import{createStore}from 'redux'
/* import {messageReducer} from './message/message.reducer'
import { counterReducer } from './counter/counter.reducer'  */
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
let store=createStore(rootReducer,composeWithDevTools())

export {store}