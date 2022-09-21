import {useEffect, useState} from "react";
import {userServices} from "../../services";
import Comment from "../coment/comment";

const Comments=()=>{
    const [comments,setComments]=useState([]);

    useEffect(()=>{
        userServices.getComments().then(value => setComments(value.data))
    },[]);

    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/> )
            }
        </div>
    )
}

export default Comments