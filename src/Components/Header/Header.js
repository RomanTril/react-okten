import React from 'react';
import { NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>

        </div>
    );
};

export default Header;