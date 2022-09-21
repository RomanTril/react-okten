const Comment =({comment})=>{
    return(
        <div>
            <h2>{comment.name}</h2>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
        </div>
    )
};

export default Comment