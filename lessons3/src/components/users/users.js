// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments


import {useEffect, useState} from "react";
import {userServices} from "../../services";
import {UserForm} from "../user-form/user-form";
import {User} from "../user/user";
import {CommentsForm} from "../comments-form/comments-form";


const Users = () => {
    let [users,setUsers]=useState([]);

    useEffect(()=>{
        userServices.getAll().then(({data})=>setUsers(data));
    },[])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <CommentsForm/>
            <hr/>
            {users.map((user)=>(<User key={user.id} user={user}/>))}

        </div>
    );
};

export  {Users};