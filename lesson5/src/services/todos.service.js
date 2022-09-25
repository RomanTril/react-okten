import {axiosInstance} from "./axios.servise";
import {urls} from "../config";

const todosService={
    getAll:()=>axiosInstance.get(`${urls.todos}`)
}
export {todosService}