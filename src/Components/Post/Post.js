import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate=useNavigate()

    return (
        <div>
            <br/>
            <div>userId:{post.userId}</div>
            <div>Id:{post.id}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
            <br/>
            <button onClick={()=>navigate(`${post.id}`,{state:{...post}})}>Posts Details</button>


        </div>
    );
};

export default Post;