import {axiosServices} from "./axios.services";
import {urls} from "../config";

const usersServices={
    getAll:()=>axiosServices.get(urls.users)
}

export {usersServices};