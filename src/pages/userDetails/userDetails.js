import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userServices} from "../../Servicec";


const UserDetails = () => {

    const {state}=useLocation();

    const[user,setUser]=useState(state)

    const {id}=useParams();

    useEffect(()=>{

        if(!state){

            userServices.getByID(id).then(({data})=>setUser(data))

        }else {

            setUser(state)
        }
    },[id,state])

    return (
        <div>

            {user && <div>{JSON.stringify(user)}</div>}
        </div>
    );
};

export  {UserDetails};