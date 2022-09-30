import {axiosService} from "./axios.services";
import {urls} from "../config";

const commentsServices={
    getAll:()=>axiosService(urls.comments),
    getByID:(id)=>axiosService(`${urls.comments}/${id}`)
}

export {commentsServices}