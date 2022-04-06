import React, { Component } from "react";
import axios from "axios";
// import { Button } from "bootstrap";
import Button from '@mui/material/Button';


class UserComments extends Component{
    constructor(props){
        super(props)
        this.state={
            userComments:[],
            email:'',
            title:'',
            body:''
        }
    }

    

    componentDidMount(){
        

        axios.get(`https://gorest.co.in/public/v2/posts/${this.props.post_id}/comments`).then((res)=>this.setState({...this.state,userComments:res.data})).catch((err)=>{console.log(err)})

    }
    render(){
        console.log(this.props.post_id)
        return(
            <div>
                <h1>COMMENTS</h1>
                {
                   
                   this.state.userComments.map((userPost)=>(
                    
                       <div>
                       <h2>email:{userPost.email}</h2>
                       <div>name:{userPost.name}</div>

                      </div>
                   
                   ))
               }

               
            </div>
        )
    }
}

export default UserComments