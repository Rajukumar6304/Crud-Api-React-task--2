import axios from "axios";
import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import UserComments from "./UserComments";
import UserPosts from "./UserPosts";
import Button from '@mui/material/Button';


class  UserPostshere extends Component
{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            userPosts:[],
            userComments:[],
            idd:""
        }
    }
        componentDidMount(){
            axios.get(`https://gorest.co.in/public/v2/users/${this.state.id}/posts`).then((res)=>this.setState({...this.state,userPosts:res.data})).catch((err)=>{console.log(err)})

        }

        

    render(){
        // console.log(this.state.userPosts);
        return !this.state.userPosts.length?
            (<div><h1>noposts</h1></div>):
            (
            <div>
                
                
                {
                    this.state.userPosts.map((userPost)=>(
                     
                        <div>
                            <h1>USER POSTS</h1>
                        <h2>title:{userPost.title}</h2>
                        <h2>user_id:{userPost.user_id}</h2>
                        <div> <h2>body:</h2>{userPost.body}</div>

                       
                        <UserComments post_id={userPost.id}/>

                       </div>
                    
                    ))
                }
                {/* <div>
                   <h1>Create Comment</h1>

                   <h2>ID:</h2><input value={this.state.name} onChange={(data)=>{this.setState({name:data.target.value})}}></input>
                   <h2>EMAIL:</h2><input></input>
                   <h2>TITLE:</h2><input></input>
                   <h2>BODY:</h2><textarea></textarea><br></br>
                   <Button variant="contained" onClick={this.setComment}>Create Comment</Button>
                
               </div> */}
                
            </div>
        )
    }
}

export default withRouter (UserPostshere)