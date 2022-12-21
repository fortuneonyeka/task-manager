import {ADD_TASK, DELETE_TASK} from "../config/actionTypes"
import Task from "../../components/models/Task"
let initialState = [new Task(1, "learn Redux-saga"), new Task(2, "Learn Rails")]

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const {data} = action
      const task = new Task(
        state.length + 1,
        data.title,
        data.description,
      )
      return [
        ...state,
        task
      ]
    case DELETE_TASK:
      const {id} = action
      return state.filter((task) => task.id !== id)
  
    default:
      return state
  }
}