import {useForm} from "react-hook-form";
import {userServices} from "../../services";

const CommentsForm = ({}) => {

    const {register,handleSubmit,formState:{errors,isValid} }=useForm({mode:"all"});


    const onSubmit= (data)=>{
       console.log(data)
       userServices.setComments(data).then(({data}) => console.log(data))
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={()=>console.log(errors)}>
            {<input type="text" placeholder={'postId'} {...register('postId',{required:true, valueAsNumber:true,min:1,message:"minimum 1 symbols"}) }/>}
            {<input type="text" placeholder={'name'} {...register('name',{minLength:{value:3,message:'minimum 3 symbols'}})}/>}
            {errors.mode&&<span>{errors.mode.message}</span>}
            {<input type="text" placeholder={'email'} {...register('email') }/>}
            {<input type="text" placeholder={'body'} {...register('body') }/>}
            <button disabled={!isValid}>Create Comments</button>

        </form>
    );
};

export {CommentsForm};