import React from 'react';
import {useDispatch} from "react-redux";

import {userAction} from "../../redux"

const User = ({user}) => {
    const {id,name,username}=user;
    const dispatch=useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={()=>dispatch(userAction.setUser(user))}>Select</button>
            <button onClick={()=>dispatch(userAction.getByUser({id}))}>Email</button>
            <button onClick={()=>dispatch(userAction.deleteUser(id))}>Delete</button>
        </div>
    );
};

export  {User};