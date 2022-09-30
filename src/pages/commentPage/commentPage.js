import React from 'react';
import {Outlet} from "react-router-dom";

import Comments from "../../Components/comments/comments";

const CommentPage = () => {

    return (
        <div>
            <div>
                <Comments/>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {CommentPage};