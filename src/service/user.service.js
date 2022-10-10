import {axiosService} from "./axiox.service";
import {urls} from "../config";

const usersService={
    getAll:()=>axiosService.get(urls.users),
    getByUser:(id)=>axiosService.get(`${urls.users}/${id}`)

}

export {usersService}