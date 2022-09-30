import {axiosService} from "./axios.services";
import {urls} from "../config";

const todosServices={
    getAll:()=>axiosService.get(urls.todos)
}

export {todosServices}