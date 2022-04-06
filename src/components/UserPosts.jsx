import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import UserPostshere from "./UserPostshere";

class UserPosts extends Component
{
    constructor(props){
        super(props)
        
    }
    
    
    render()
    {

   
        return(
            <React.Fragment>
            <th>
            < Link  to={`/v2/users/${this.props.id}/posts`} >UserPost</Link>
            </th>
            {/* <UserPostshere id={this.post.id}></UserPostshere> */}
            </React.Fragment>
        )
    }
}
export default UserPosts