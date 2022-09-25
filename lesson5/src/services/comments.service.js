import {axiosInstance} from "./axios.servise";
import {urls} from "../config";

const commentsService={
    getAll:()=>axiosInstance.get(`${urls.comments}`)
}
export {commentsService}