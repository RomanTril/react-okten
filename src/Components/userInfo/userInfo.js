export default  function UserInfo(props){
    let {chosenUser}=props
    return(
    <div> {chosenUser.address.city} <br/>
        {chosenUser.address.street} <br/>
        {chosenUser.address.suite} <br/>
        {chosenUser.address.zipcode}</div>)
}