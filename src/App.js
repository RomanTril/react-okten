import './App.css';
import {useRef} from "react";

import {actions} from "./reducers/action";
import {useAnimalReducer} from "./reducers/reducer";

const App=()=> {

    const addCatRef=useRef();
    const addDogRef=useRef();


    const [catState,catDispatch]=useAnimalReducer()
    const [dogState,dogDispatch]=useAnimalReducer()




    const addCat=()=>{
        catDispatch({type:actions.CREATE ,payload:{name:addCatRef.current.value}})
    }

    const addDog=()=> {
        dogDispatch({type:actions.CREATE,payload:{name:addDogRef.current.value}})
    }

    const deleteCat=(id)=>{
        catDispatch({type: actions.DELETE,payload: {id}})
    }

    const deleteDog=(id)=>{
        dogDispatch({type: actions.DELETE,payload: {id}})
    }



    return (
    <div className="App" >

         <div className="Wrap" style={{display:"flex",justifyContent:"center", alignItems:"center"}} >

           <div>
                 <h1>Add Cat:</h1>
               <input type={"text"} ref={addCatRef} />
                <button onClick={addCat}>Add Cat</button>
           </div>

           <div>
                 <h1>Add Dog:</h1>
                 <input type={"text"} ref={addDogRef}/>
                 <button onClick={addDog} >Add Dog</button>
           </div>
         </div>
         <hr/>

        <div style={{display:"flex",justifyContent:"space-evenly"}}>

             <div>
                 <div>
                     {catState.map(cat=><div key={cat.id}>
                         {cat.name}
                         <button onClick={()=>deleteCat(cat.id)}>Delete Cat</button>
                     </div>)}
                 </div>

             </div>
            <div>
                <div>
                    {dogState.map((dog=><div key={dog.id}>
                        {dog.name}
                        <button onClick={()=>deleteDog(dog.id)}>Delete Dog</button>
                    </div>))}
                </div>
            </div>
        </div>


    </div>
   );


}

export default App;






