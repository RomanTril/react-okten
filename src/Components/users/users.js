import React, {useEffect, useState} from 'react';

import {userServices} from "../../Servicec";
import User from "../user/user";

const Users = () => {

   let[users,setUsers]= useState([]);

   useEffect(()=>{

        userServices.getAll().then(({data})=>setUsers(data))
   })
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};