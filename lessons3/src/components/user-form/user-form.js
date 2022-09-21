import {useForm} from "react-hook-form";
import {userServices} from "../../services";

const UserForm = ({setUsers}) => {

    const {register,handleSubmit,formState:{errors,isValid} }=useForm({mode:"all"});


    const submit= async (user)=>{
        const {data} = await userServices.create(user);
        setUsers(users=>[...users,data])
    };
    return (
        <form onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
            {<input type="text" placeholder={'name'} {...register('name',{require:true,minLength:{value:3, message:'minimum 3 symbols'}})}/>}
            {errors.mode&&<span>{errors.mode.message}</span>}
            {<input type="text" placeholder={'username'} {...register('username',{required:true,minLength:{value:3,message:'minimum 3 symbols'}})}/>}
            {errors.mode&&<span>{errors.mode.message}</span>}
            {<input type="text" placeholder={'email'} {...register('email',{minLength:{value:3,message:'minimum 3 symbols'}})}/>}
            {errors.mode&&<span>{errors.mode.message}</span>}
            {<input type="text" placeholder={'phone'} {...register('phone',{valueAsNumber:true,min:10,message:"minimum 10 symbols"}) }/>}
            {errors.mode&&<span>{errors.mode.message}</span>}
             <button disabled={!isValid}>Create Users</button>

         </form>
    );
};

export {UserForm};