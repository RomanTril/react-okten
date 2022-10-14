import {axiosService,AxiosRes} from "./axios";
import {urls} from "../config";
import {ICar} from "../interface";


const carServices={
    getAll:():AxiosRes<ICar[]>=>axiosService.get(urls.cars)
}

export {
    carServices
}