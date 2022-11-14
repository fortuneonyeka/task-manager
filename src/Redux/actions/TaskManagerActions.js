import * as actionTypes from "../config/actionTypes"

export const addAction = (data) => {
  return{
    type: actionTypes.ADD_TASK,
    data
  }
}

export const deleteAction = (id) => {
  return {
    type:actionTypes.DELETE_TASK,
    id
  }
}