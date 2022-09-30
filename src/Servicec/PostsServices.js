import {axiosService} from "./axios.services";
import {urls} from "../config";
import posts from "../Components/Posts/Posts";

const postsServices={
    getAll:()=>axiosService(urls.posts),
    getPostById:()=>axiosService(`${urls} + ${posts.id}`)
}

export {postsServices}