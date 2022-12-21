import axios from "axios"
import {taskUrl} from "../Redux/config/Apis"

export const  getTask = async () => {
 return axios.get(taskUrl).then(res => res.data)
}

/**
 * 
 * @param {title, description} data
 * */
export const addTask = (data) => {
 return axios.post(taskUrl, data).then(res => res.data)
}
export const deleteTask = (id) => {
  return axios.delete(taskUrl + "/" + id).then(res => res.data)
}