import { userReducer } from "./User/user.reducer";
import{composeWithDevTools}from "@redux-devtools/extension"
import {applyMiddleware, createStore}from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

let middleware=[logger,thunk]

let store=createStore(userReducer,composeWithDevTools(applyMiddleware(...middleware)))

export{store}
