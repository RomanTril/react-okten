import {axiosInstance} from "./axios.servise";
import {urls} from "../config";

const postsService={
    getPostsById:(id)=>axiosInstance.get(`${urls.posts +'/'+ id}`)
}

export {postsService}