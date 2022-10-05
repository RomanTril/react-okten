import {axiosServices} from "./axios.services";
import {urls} from "../config";

const postsServices={
    getAll:()=>axiosServices.get(urls.posts)
}

export {postsServices}