import React from 'react';

const Todos = ({todos}) => {

    return (
        <div>
            <div>userId: {todos.userId}</div>
            <div>id: {todos.id}</div>
            <div>title: {todos.title}</div>
            <div>completed: {todos.completed.toString()}</div><br/>

        </div>
    );
};

export default Todos;