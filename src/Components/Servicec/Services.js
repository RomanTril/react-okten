const getUsers=()=>{
   return  fetch( 'https://rickandmortyapi.com/api/character').
    then(value =>value.json())
}

export {getUsers}