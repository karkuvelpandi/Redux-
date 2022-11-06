import {createStore} from "redux"
import  counterReducer  from "./Counter/counter.reducer"
import {composeWithDevTools} from "@redux-devtools/extension"

let store=createStore(counterReducer,composeWithDevTools())

export {store}