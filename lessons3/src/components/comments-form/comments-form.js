import {useForm} from "react-hook-form";
import {userServices} from "../../services";

const CommentsForm = ({}) => {

    const {register,reset,handleSubmit,formState:{errors,isValid} }=useForm({mode:"all"});


    const onSubmit= (data)=>{
       userServices.setComments(data).then(({data}) => console.log(data))
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={()=>console.log(errors)}>

            {<input type="text" placeholder={'name'} {...register('name',{required:true, minLength:{value:3,message:'minimum 3 symbols'}})}/>}
            {errors.mode&&<span>{errors.mode.message}</span>}
            {<input type="text" placeholder={'email'} {...register('email') }/>}
            {<input type="text" placeholder={'body'} {...register('body') }/>}
            <button disabled={!isValid}>Create Comments</button>

        </form>
    );
};

export {CommentsForm};