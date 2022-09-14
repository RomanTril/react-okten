// Task 2(1)

export default function User(props){
let{name,id,status,species,gender,photo }=props
    return (<div>
        <h2>{id} {name}</h2>
        <p>{status} {species} {gender}</p>
        <img src={photo} alt={name}/>
    </div>)
}

