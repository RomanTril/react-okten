import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsServices} from "../../services";
import {Post} from "../Post/Post";


const Posts = () => {

    const state=useSelector(state => state.postReducer.posts)

    const dispatch=useDispatch();

    useEffect(()=>{
        postsServices.getAll().then(({data})=>{dispatch({type:"LOAD_POSTS", payload:data})})
    },[])


    return (
        <div>
            {state.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export  {Posts};