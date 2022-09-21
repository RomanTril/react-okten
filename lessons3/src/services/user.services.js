import {axiosService} from "./axios.services";

import {urls} from "../config";

const userServices={
    getAll:()=>axiosService.get(urls.users),
    setComments:(comments)=>axiosService.post('/comments',{data:comments}),
    create:(user)=>axiosService.post(urls.users, user),
}
export {userServices}