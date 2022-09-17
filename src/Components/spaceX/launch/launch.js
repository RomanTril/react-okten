export default function Launch({item}){
    return <div>
        <h2>{item.mission_name}</h2>
        <h3>{item.launch_year}</h3>
        <img src={item.links.mission_patch_small} alt={item.mission_name}/>
    </div>
}