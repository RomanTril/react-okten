import {useEffect, useState} from "react";
import {getLaunches} from "../../../services/spaceX.api.axios.service";
import Launch from "../launch/launch";

export default function Launches(){
    let [launches,setLaunches]=useState([]);

    useEffect(()=>{
        getLaunches().then(value =>setLaunches(value.data))
    },[]);

    return(
        <div>
            {launches.filter(value => value.launch_year!=='2020').map((value, index) =>(<Launch key={index} item={value}/>))}
        </div>
    )
};

