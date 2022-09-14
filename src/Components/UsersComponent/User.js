// Task 2(1)

export default function User(props){
let{name,id,status,species,gender,photo }=props
    return (<div>
        <h2>{id} {name}</h2>
        <p>{status} {species} {gender}</p>
        <img src={photo} alt={''}/>
    </div>)
}

// TASK 2(2)

// export default function RickAndMortyComponent(props){
//     let {ItemId, ItemName, ItemStatus, ItemSpecies, ItemGender, pic}=props
//         let classNameItem='father'
//     return (
//         <div className={classNameItem}>
//          <h2>{ItemId} {ItemName}</h2>
//          <p>{ItemStatus}</p>
//          <p>{ItemSpecies}</p>
//          <p>{ItemGender}</p>
//          <img src={pic}/>
//      </div>)
// }