import React, {useEffect, useState} from 'react';

import {todosServices} from "../../Servicec";
import Todo from "../todo/Todo";

const Todos = () => {

    const[todos,setTodos]=useState([]);

    useEffect(()=>{

        todosServices.getAll().then(({data})=>setTodos(data))
    })
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;