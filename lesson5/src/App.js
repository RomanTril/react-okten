
import './App.css';
import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom";

import Home from "./components/home/Home";
import Todoses from "./components/todoses/Todoses";
import Albums from "./components/albums/Albums";
import{Comments} from "./components";
import{Posts} from "./components/posts/Posts";


function App() {
  return (
    <div className="App">

      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/todos'}>Todos</Link></li>
        <li><Link to={'/album'}>Album</Link></li>
        <li><Link to={'/comments'}>Comments</Link></li>
      </ul>

      <hr/>

      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/todos'} element={<Todoses/>}/>
          <Route path={'/album'} element={<Albums/>}/>
          <Route path={'/comments'} element={<Comments/>}/>
          <Route path={'/comments/:id'} element={<Posts/>}/>




      </Routes>



    </div>
  );
}

export default App;
