import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const commentNavigate=useNavigate();
    return (
        <div>
            <br/>
            <div>postId:{comment.postId}</div>
            <div>Id:{comment.id}</div>
            <div>name:{comment.name}</div>
            <div>email:{comment.email}</div>
            <div>body:{comment.body}</div>
            <br/>
            <button onClick={()=>commentNavigate(`${comment.id}`,{state:{...comment}})}>Comments Details</button>
        </div>
    );
};

export default Comment;