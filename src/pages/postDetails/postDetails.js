import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postsServices} from "../../Servicec";

const PostDetails = () => {

    const {state}=useLocation();

    const [post,setPost]=useState(state);

    const {id}=useParams();

    useEffect(()=>{

        if(!state){

            postsServices.getPostById(id).then(({data})=>setPost(data))

        }else {

            setPost(state)
        }
    })

    return (

        <div>
            {post && <div>{JSON.stringify(post)}</div>}
        </div>
    );
};

export {PostDetails};