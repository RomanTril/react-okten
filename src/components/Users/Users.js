import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {usersServices} from "../../services";
import User from "../User/User";


const Users = () => {

const state=useSelector(state => state.userReducer.users);


const dispatch=useDispatch();

useEffect(()=>{
    usersServices.getAll().then(({data}) => {dispatch({type:"LOAD_USER",payload:data})})

},[])



    return (
        <div>

            {state.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export  {Users};