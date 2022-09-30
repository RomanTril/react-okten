import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../../Components";

const UserPages = () => {

    return (
        <div>
            <div>
                 <Users/>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserPages};