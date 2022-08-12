import { combineReducers } from "redux"

import stockReducer from "./stock.js"
import queryReducer from "./query.js"

export default combineReducers({ stock: stockReducer, query: queryReducer})