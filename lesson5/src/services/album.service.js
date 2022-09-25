import {axiosInstance} from "./axios.servise";
import {urls} from "../config";

const albumsService={
    getAll:()=>axiosInstance.get(`${urls.albums}`)
}
export {albumsService}