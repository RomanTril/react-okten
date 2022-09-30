
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {AlbumPages, UserPages,HomePages,TodosPage,PostsPages,NotFoundPages,CommentPage,CommentsDetails,AboutPages,UserDetails,PostDetails} from "./pages";




function App() {
  return (

      <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePages/>}/>
                 <Route path={'todos'} element={<TodosPage/>}/>
                 <Route path={'albums'} element={<AlbumPages/>}/>
                 <Route path={'users'} element={<UserPages/>}>
                     <Route path={':id'} element={<UserDetails/>}/>
                 </Route>

                 <Route path={'posts'} element={<PostsPages/>}>
                     <Route path={':id'} element={<PostDetails/>}/>
                 </Route>
                <Route path={'comments'} element={<CommentPage/>}>
                    <Route path={':id'} element={<CommentsDetails/>}/>
                </Route>
                <Route path={'about'} element={<AboutPages/>}/>

            </Route>

                <Route path={'*'} element={<NotFoundPages/>}/>
      </Routes>


  );
}

export default App;






