// 1. Описати всю сім'ю сімпсонів (5 персонажів)

export default  function Component(props){
    let {itemName,itemSurname,itemAge,itemInfo,itemPhoto}=props;
    let className='card';
    return(
        <div className={className}>
               <h2>{itemName} {itemSurname},{itemAge}</h2>
               <p>{itemInfo}</p>
               <img src={itemPhoto} alt={itemName}/>
        </div>
    )}



