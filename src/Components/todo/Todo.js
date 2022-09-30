import React from 'react';

const Todo = ({todo}) => {

    return (
        <div>
            <div>userId:{todo.userId}</div>
            <div>Id:{todo.id}</div>
            <div>title:{todo.title}</div>
            <div>completed:{todo.completed.toString()}</div>
            <br/>
        </div>
    );
};

export default Todo;