import React from 'react';
import {useDispatch} from "react-redux";

import {postsActions} from "../../redux";

const Post = ({post}) => {
    const dispatch=useDispatch();

    return (
        <div>
            <div>{post.id} {post.title}</div>
            <button onClick={()=>dispatch(postsActions.setPost(post))}>select post</button>
            <button onClick={()=>dispatch(postsActions.deletePost(post.id))}>delete post</button>
        </div>
    );
};

export {Post}