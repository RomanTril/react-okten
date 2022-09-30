import React from 'react';
import {Outlet} from "react-router-dom";

import Posts from "../../Components/Posts/Posts";

const PostsPages = () => {

    return (
        <div>
            <div>
                <Posts/>
            </div>

             <div>
                <Outlet/>
             </div>
        </div>
    );
};

export {PostsPages}