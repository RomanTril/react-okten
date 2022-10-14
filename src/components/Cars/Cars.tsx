import React, {useEffect, useState} from 'react';
import {ICar} from "../../interface";
import {carServices} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {

    const [cars,setCars]=useState<ICar[]>([]);

    useEffect(()=>{

        carServices.getAll().then(({data})=>setCars(data))

    },[])

    return (
        <div>
            {cars.map(car=><Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};