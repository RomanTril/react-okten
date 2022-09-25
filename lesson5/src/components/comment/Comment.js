import React from 'react';
import {Link} from "react-router-dom";


const Comment = ({comment}) => {

    return (
        <div>
            <div>postId: {comment.postId}</div>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <div>body: <Link to={comment.postId.toString()} state={comment.postId}>{comment.body}</Link></div><br/>
        </div>
    );
};

export {Comment};