import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const {id}=user;

   const navigate=useNavigate();
    return (
        <div>
            <br/>
            <div>Id:{user.id}</div>
            <div>Name:{user.name}</div>
            <div>UserName:{user.username}</div>
            <div>Email:{user.email}</div>
            <br/>
            <button onClick={()=>navigate(`${id}`,{state:{...user}})}> User Details </button>

        </div>
    );
};

export default User;