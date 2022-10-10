import React from 'react';
import {useSelector} from "react-redux";

import css from "./PostHeader.module.css"

const PostHeader = () => {
    const {choosePost}=useSelector(state => state.postReducer)
    return (
        <div className={css.PostHeader}>
            {choosePost&& choosePost.body}
            <hr/>
        </div>
    );
};

export  {PostHeader};