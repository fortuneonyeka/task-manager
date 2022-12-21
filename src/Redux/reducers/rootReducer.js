import {combineReducers} from "redux"
import { taskReducer } from "./TaskReducer"


const rootReducer = combineReducers({
  tasks:taskReducer,
  user: () => null
})

export default rootReducer