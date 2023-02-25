import {counterReducer}from "./counter/counter.reducer"
import { createStore } from "redux"
import {composeWithDevTools}from "@redux-devtools/extension"

let store=createStore(counterReducer,composeWithDevTools())

export {store}