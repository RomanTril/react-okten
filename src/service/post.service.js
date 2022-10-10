import {axiosService} from "./axiox.service";
import {urls} from "../config";

const postsService={
    getAll:()=>axiosService.get(urls.posts),
}

export {postsService}