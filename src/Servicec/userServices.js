
import {axiosService} from "./axios.services";
import {urls} from "../config";

const userServices={
    getAll:()=>axiosService.get(urls.users),
    getByID:(id)=>axiosService.get(`${urls.users} /${id}` )
}
export {userServices}