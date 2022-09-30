import React from 'react';

const Album = ({album}) => {

    return (
        <div>
            <div>userId:{album.userId}</div>
            <div>Id:{album.id}</div>
            <div>title:{album.title}</div>
            <br/>
        </div>
    );
};

export default Album;