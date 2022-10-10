import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userAction} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch=useDispatch();
    const {users,error,loading}=useSelector(state => state.userReducer);

    useEffect(()=>{
        dispatch(userAction.getAll())
    },[])

    return (
        <div>
            {loading&&<h1>Loading.................................</h1>}
            {error&&<h1>Error</h1>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
}

export {Users};