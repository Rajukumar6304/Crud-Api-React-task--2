import React, { Component } from "react";
import axios from "axios";
import UserEditData from "./UserEditData";
import Creating from "./Creating";
import '../App.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import UserPosts from "./UserPosts";
import { Link } from "react-router-dom";
import UserTodos from "./UserTodos";
import ModelboxForm from "./ModelboxForm";

class Users extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[],
            isOpen:false,
            newUser:{
            name:'',
            email:'',
            gender:'',
            status:''}
        }
    }
    
   getUsers = ()=>{
        axios.get('https://gorest.co.in/public/v2/users')
            .then(response => {
                console.log(response )
                this.setState({users:response.data})
            })
            .catch(error =>
                {
                    console.log(error)
                })
    }



    openModel=()=>{this.setState({isOpen:true}) };
    
    
   
    closeModel=()=>this.setState({isOpen:false})

    addUserdata =()=>
    {
        // console.log(this.state.newUser);
        const data ={
            name:this.state.newUser.name,
            email:this.state.newUser.email,
            gender:this.state.newUser.gender,
            status:this.state.newUser.status
        }
        axios.post(`https://gorest.co.in/public/v2/users`,data,{
            method:'POST',
            headers:{
              Authorization:'Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca'
            }
          })
          .then(res => {
            console.log(res);
          
           })
           .catch(error =>
            {
                console.log(error)
            })
        }

        handleChange=(event)=>{
            console.log("fff");
            alert("hdhdh")
            this.setState({
                // ...this.state,
                newUser:{
                    // ...this.state.newUser,
                    [event.target.name]:event.target.defalutvalue
                }
                
            })

        }
    componentDidMount()
    {
        this.getUsers()
               
    }
    // style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    //   };
    render()
    {
        const {users} = this.state
        
        return(
            <div>
                <div>
            <Button  style={{backgroundColor:"#03fc84"}} onClick={this.openModel}>CreateUser</Button>
            {/* <Modal open={this.state.isOpen} className="modal">
                
            <Box sx={this.style}>
                <Typography id="modal-modal-title" >
               
                    <input type="text" placeholder='name' name="name" value={this.state.name} onChange={(data)=>{this.setState({name:data.target.value})}}></input><br></br>

                    <input type="text" placeholder='email' name="email" value={this.state.email}  onChange={(data)=>{this.setState({email:data.target.value})}}></input><br></br>

                    <input type="text" placeholder='gender' name="gender" value={this.state.gender}  onChange={(data)=>{this.setState({gender:data.target.value})}}></input><br></br>

                    <input type="text" placeholder='status' name="status" value={this.state.status}  onChange={(data)=>{this.setState({status:data.target.value})}}></input><br></br>

                    <button onClick={this.addUserdata}>SAVE</button>

                    <button onClick={this.closeModel}>CANCEL</button>
                </Typography>
                </Box>
            </Modal> */}
                <ModelboxForm 
                    isOpen={this.state.isOpen}
                    newUser={this.state.newUser}
                    closeModel={this.closeModel} 
                    handleChange={this.handleChange}
                    addUserdata={this.addUserdata} />
            </div>
                   <table>
                       <thead>
                           <tr>
                               <th><h1>id</h1></th>
                               <th><h1>name</h1></th>
                               <th><h1>email</h1></th>
                               <th><h1>gender</h1></th>
                               <th><h1>status</h1></th>
                               <th><h1>edit</h1></th>
                               <th><h1>update</h1></th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                        users.length?
                        users.map(post => <tr key={post.id}>          
                            <th>{post.id}</th>
                            <th>{post.name}</th>
                            <th>{post.email}</th>
                            <th>{post.gender}</th>
                            <th>{post.status}</th>
                            {/* <th>
                            <input type="submit">edit</input>
                            <input type="submit">delate</input>
                            </th> */}
                            <UserEditData users={users} id={post.id} getUsers={this.getUsers} openModel={this.openModel}></UserEditData>
                            
                             <UserPosts id={post.id}></UserPosts>
                             <UserTodos id={post.id}></UserTodos>
                            </tr>):
                        null
                       
                     }
                       </tbody>
                   </table>


  
          
 
   
            </div>
        )
    }
}
export default Users