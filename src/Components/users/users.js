import {useEffect, useState} from "react";
import {getUsersAxios,getUserAxios} from "../../services/user.api.axios.service";

import User from "../user/user";
import UserInfo from "../userInfo/userInfo";

export default function Users(){
    let [users, setUsers]=useState([])
    let [chosenUser,setChosenUser]=useState(null);

    useEffect(()=>{
        getUsersAxios().then(value =>setUsers(value.data))
    },[]);

    const chooseUser = (id) => {
        getUserAxios(id).then(value =>setChosenUser(value.data))
    }

    return (<div>
       <div> {chosenUser&&<UserInfo chosenUser={chosenUser} />}</div>
        {users.map((value) => (<User key={value.id} item={value} chooseUser={chooseUser}/>))}
    </div>)
}
