import React, {useEffect, useState} from 'react';

import {postsServices} from "../../Servicec";
import Post from "../Post/Post";

const Posts = () => {

   let[posts,setPosts] = useState([]);

   useEffect(()=>{

       postsServices.getAll().then(({data})=>setPosts(data))
   })
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;