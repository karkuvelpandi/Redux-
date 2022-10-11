import {createStore} from 'redux'
import {messageReducer}from '../redux/Message/message.reducer'
import {composeWithDevTools}from "redux-devtools-extension"

let store=createStore(messageReducer,composeWithDevTools())

export {store}