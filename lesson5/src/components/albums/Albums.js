import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import Album from "../album/Album";

const Albums = () => {

    let [albums, setAlbums]=useState([])

    useEffect(()=>{
        albumsService.getAll().then(({data})=>setAlbums(data))
    },[])
    return (
        <div>
            {albums.map((album) => (<Album key={album.id} album={album}/>))}
        </div>
    );
};

export default Albums;