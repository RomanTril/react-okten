import {axiosService} from "./axios.services";
import {urls} from "../config";

const albumsServices={
    getAll:()=>axiosService.get(urls.albums)
}

export {albumsServices}