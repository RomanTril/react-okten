import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import Todos from "../todos/Todos";

const Todoses = () => {

    let [todoses,setTodoses]=useState([])

    useEffect(()=>{
        todosService.getAll().then(({data}) =>setTodoses(data))
    },[])

    return (
        <div>
            {todoses.map((todos)=>(<Todos key={todos.id} todos={todos}/> ))}

        </div>
    );
};

export default Todoses;