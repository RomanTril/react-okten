import './App.css';

import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layout";
import {CommentPages, PostsPages, UsersPage} from "./pages";

function App() {

  return (


        <Routes>
            <Route index element={<MainLayout/>}/>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/posts'} element={<PostsPages/>}/>
            <Route path={'/comments'} element={<CommentPages/>}/>
        </Routes>



  );
}

export default App;






