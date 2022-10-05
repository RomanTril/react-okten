import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentsServices} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const state=useSelector(state => state.commentReducer.comments);

    const dispatch=useDispatch();

    useEffect(()=>{
        commentsServices.getAll().then(({data})=>{dispatch({type:"LOAD_COMMENTS",payload:data})})
    })


    return (
        <div>
            {state.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export  {Comments};