import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {commentsServices} from "../../Servicec";

const CommentsDetails = () => {

    const {state}=useLocation();

    const[comment,setComment]=useState(state);

    const {id}=useParams()

    useEffect(()=>{

        if(!state){

            commentsServices.getByID(id).then(({data})=>setComment(data))

        }else {

            setComment(state)
        }
    })

    return (

        <div>
            {comment&&<div>{JSON.stringify(comment)}</div>}
        </div>
    );
};

export {CommentsDetails};