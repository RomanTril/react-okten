// import './App.css';
// // import {useRef} from "react";
// //
// // import {actions} from "./reducers/action";
// // import {useAnimalReducer} from "./reducers/reducer";
//
// const App=()=> {
//
//     // const addCatRef=useRef();
//     // const addDogRef=useRef();
//     //
//     //
//     // const [catState,catDispatch]=useAnimalReducer()
//     // const [dogState,dogDispatch]=useAnimalReducer()
//     //
//     //
//     //
//     //
//     // const addCat=()=>{
//     //     catDispatch({type:actions.CREATE ,payload:{name:addCatRef.current.value}})
//     // }
//     //
//     // const addDog=()=> {
//     //     dogDispatch({type:actions.CREATE,payload:{name:addDogRef.current.value}})
//     // }
//     //
//     // const deleteCat=(id)=>{
//     //     catDispatch({type: actions.DELETE,payload: {id}})
//     // }
//     //
//     // const deleteDog=(id)=>{
//     //     dogDispatch({type: actions.DELETE,payload: {id}})
//     // }
//     //
//     //
//     //
//     // return (
//     // <div className="App" >
//     //
//     //      <div className="Wrap" style={{display:"flex",justifyContent:"center", alignItems:"center"}} >
//     //
//     //        <div>
//     //              <h1>Add Cat:</h1>
//     //            <input type={"text"} ref={addCatRef} />
//     //             <button onClick={addCat}>Add Cat</button>
//     //        </div>
//     //
//     //        <div>
//     //              <h1>Add Dog:</h1>
//     //              <input type={"text"} ref={addDogRef}/>
//     //              <button onClick={addDog} >Add Dog</button>
//     //        </div>
//     //      </div>
//     //      <hr/>
//     //
//     //     <div style={{display:"flex",justifyContent:"space-evenly"}}>
//     //
//     //          <div>
//     //              <div>
//     //                  {catState.map(cat=><div key={cat.id}>
//     //                      {cat.name}
//     //                      <button onClick={()=>deleteCat(cat.id)}>Delete Cat</button>
//     //                  </div>)}
//     //              </div>
//     //
//     //          </div>
//     //         <div>
//     //             <div>
//     //                 {dogState.map((dog=><div key={dog.id}>
//     //                     {dog.name}
//     //                     <button onClick={()=>deleteDog(dog.id)}>Delete Dog</button>
//     //                 </div>))}
//     //             </div>
//     //         </div>
//     //     </div>
//     //
//
//     </div>
//    );
//
//
// }
//
// export default App;
//
//


import './App.css';
import {useReducer, useRef} from "react";


const reducer=(state,action)=>{
    const {type,payload}=action;

    switch (type){
        case'addCat':
            return{...state,cats:[...state.cats,{ name:payload,id:Date.now()}]}
        case'addDog':
            return{...state,dogs:[...state.dogs,{name: payload,id: Date.now()}]}
        case 'deleteCat':
            return{...state,cats:state.cats.filter(cat=>cat.id!==payload)}
        case 'deleteDog':
            return{...state,dogs:state.dogs.filter(dog=>dog.id!==payload)}
        default:
            return {state}

    }
}

const App=()=> {

const[state,dispatch]=useReducer(reducer,{cats:[],dogs:[]});

let catRef=useRef();
let dogRef=useRef();

const addCat=()=>{
    dispatch({type:'addCat', payload:catRef.current.value})
    payload:catRef.current.value="";

}

const addDog=()=>{
    dispatch({type:'addDog',payload:dogRef.current.value})
    payload:dogRef.current.value="";
}



    return (

    <div className="App"  >
        <div  style={{display:"flex"}}>

            <div>
            <label>Cats: <input type={'addCat'} ref={catRef}/> </label>
                <button onClick={addCat}>AddCat</button>
            </div>

            <div>
            <label>Dogs: <input type={'addDog'} ref={dogRef}/></label>
                <button onClick={addDog}>AddDog</button>
            </div>
        </div>
        <hr/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <div>
                {state.cats.map(cat=><div key={cat.id}>{cat.name}
                <button onClick={()=>dispatch({type:'deleteCat',payload:cat.id})}>delete Cat</button>
                </div>)}
            </div>

            <div>
                {state.dogs.map(dog=><div key={dog.id}>{dog.name}
                <button onClick={()=>dispatch({type:'deleteDog',payload:dog.id})}>delete Dog</button>
                </div>)}
            </div>
        </div>








    </div>
);


}

export default App;




