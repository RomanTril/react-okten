// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character

import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../Servicec/Services";

export default function Users(){
    let [users,setUsers]=useState([]);

useEffect(()=>{
   getUsers().then(value => setUsers(value.results));

},[])
    return (
        <div>
             {users.map((user,index)=>
                 (<User name={user.name}
                        id={user.id}
                        status={user.status}
                        species={user.species}
                        gender={user.gender}
                        photo={user.image}
                        key={index}/>))}
        </div>)
}








