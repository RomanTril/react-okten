import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";


const userReducer=(state={users:[]},action)=>{
  switch (action.type){
      case "LOAD_USER":
        return {...state,users:action.payload }
      default:
          return state

  }


};

const postReducer=(state={posts:[]}, action)=>{
    switch (action.type){

        case "LOAD_POSTS":
            return {...state,posts:action.payload}
        default:
            return state
    }


};

const commentReducer=(state={comments:[]}, action)=>{
    switch (action.type){
        case "LOAD_COMMENTS":
            return {...state,comments:action.payload}
        default:
            return state
    }

};



let reducer=combineReducers({userReducer,postReducer,commentReducer})

const store=createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store={store}>

      <BrowserRouter>
            <App />
      </BrowserRouter>

    </Provider>

);


