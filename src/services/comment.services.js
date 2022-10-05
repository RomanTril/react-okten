import {axiosServices} from "./axios.services";
import {urls} from "../config";

const commentsServices={
    getAll:()=>axiosServices.get(urls.comments)
}

export {commentsServices};