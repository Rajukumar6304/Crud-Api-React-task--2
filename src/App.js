import logo from "./logo.svg";
import "./App.css";
import BasicButtons from "./components/UserEditData";
import Users from "./components/Users";
import Posts from "./components/Posts";
import ResponsiveAppBar from "./components/Appbar";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Comments from "./components/Comments";
import Todos from "./components/Todos";
import UserPostshere from "./components/UserPostshere";
import UserTodos from "./components/UserTodos";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />

        <Switch>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/Comments">
            <Comments />
          </Route>
          <Route path="/Todos">
            <Todos />
          </Route>

          <Route path="/v2/users/:id/posts">
            <UserPostshere />
          </Route>
          <Route path="/v2/users/:id/todos">
            <UserTodos />
          </Route>
          <Redirect from="/" to="/Users" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
