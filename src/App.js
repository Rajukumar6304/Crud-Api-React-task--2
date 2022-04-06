import logo from './logo.svg';
import './App.css';
import BasicButtons from './components/UserEditData';
import Users from './components/Users';
import Posts from './components/Posts';
import ResponsiveAppBar from './components/Appbar';
// import Linked from './components/Linked';

import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Comments from './components/Comments';
import Todos from './components/Todos';
import UserPostshere from './components/UserPostshere';
import UserTodos from './components/UserTodos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        
        <Switch>
          {/* <Route path="/Get" element={<Get />} /> */}
          <Route path="/Users"><Users /></Route>
          <Route path="/posts"><Posts/></Route>
          <Route path="/Comments"><Comments /></Route>
          <Route path="/Todos"><Todos /></Route>
        
          <Route exact path="/v2/users/:id/posts">
            <UserPostshere />
            </Route>
          {/* <Route path="/Posts" element={<Posts />} /> */}
          <Route exact path="/v2/users/:id/todos">
            <UserTodos   />
          </Route>
        </Switch>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
