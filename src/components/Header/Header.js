import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    return (
        <div >
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>

            </div>


        </div>

    );
};

export {Header};