import {axiosService} from "./axios.services";

import {urls} from "../config";

const userServices={
    getAll:()=>axiosService.get(urls.users),
    setComments:(comment)=>axiosService.post('/comments',comment),
    getComments:()=>axiosService.get('/comments'),
    create:(user)=>axiosService.post(urls.users, user),
}
export {userServices}