import React, {useEffect, useState} from 'react';

import {Comment} from "../comment/Comment";
import {commentsService} from "../../services";



const Comments = () => {

    let [comments,setComments]=useState([])

    useEffect(()=>{
       commentsService.getAll().then(({data})=>setComments(data))
    },[])

    return (
        <div>

            {comments.map((comment)=>(<Comment key={comment.id} comment={comment}/>))}
        </div>
    );
};

export {Comments};