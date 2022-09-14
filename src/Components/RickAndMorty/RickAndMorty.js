// TASK 2(2)

export default function RickAndMortyComponent(props){
    let {RickAndMortyId, RickAndMortyName, RickAndMortyStatus, RickAndMortySpecies, RickAndMortyGender, pic}=props
    let classNameItem='father'
    return (
        <div className={classNameItem}>
            <h2>{RickAndMortyId} {RickAndMortyName}</h2>
            <p>{RickAndMortyStatus}</p>
            <p>{RickAndMortySpecies}</p>
            <p>{RickAndMortyGender}</p>
            <img src={pic}  alt={RickAndMortyName}/>
        </div>
    )   }