import css from './user.module.css'

const User=({user})=>{

    return(
        <div className={css.User}>
            <div>
             <div>id:{user.id}</div>
             <div>name:{user.name}</div>
             <div>username:{user.username}</div>
             <div>email:{user.email}</div>
             <div>phone:{user.phone}</div>
            </div>
        </div>)
};

export {User}