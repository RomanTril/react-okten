import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../post/Post";


const Posts = () => {
    const{id}= useParams()

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        postsService.getPostsById(id).then(({data})=>setPosts([{...data}]))

    },[id])
    return (
        <div>
            {posts.map((post)=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};