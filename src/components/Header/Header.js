import React from 'react';

import css from "./Header.module.css"
import {useSelector} from "react-redux"

const Header = () => {
    const {chooseUser,email}=useSelector(state => state.userReducer);
    return (
        <div className={css.Header}>
            {chooseUser&&chooseUser.name}
            <hr/>
            {email&&email.email}




        </div>
    );
};

export  {Header};