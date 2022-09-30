import React, {useEffect, useState} from 'react';

import {commentsServices} from "../../Servicec";
import Comment from "../comment/comment";

const Comments = () => {

   let[ comments,setComments] = useState([]);

   useEffect(()=>{

       commentsServices.getAll().then(({data})=>setComments(data))
   })
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;