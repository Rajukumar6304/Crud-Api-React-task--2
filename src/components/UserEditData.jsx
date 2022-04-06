// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import React, { Component } from "react";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModeelboxForm from "./ModelboxForm";




 class UserEditData extends Component{

              constructor(props){
                super(props)

                this.state={
                  isOpen:false,
                  name:'',
                  email:'',
                  gender:'',
                  status:''
            
                }

              } 
              //modal box closeing function
              closeModel=()=>this.setState({isOpen:false})

             
             // modal box open function
              openModel=()=>{this.setState({isOpen:true})  };



              setUserData=(userObj)=>
              {
                console.log(userObj);
                  this.setState({id:userObj.id, 
                    name:userObj.name, 
                    email:userObj.email,
                    gender:userObj.gender,
                    status:userObj.status
                  })
              }


              // updatedata
              updateUserdata=(id,userObj)=>
              {
                console.log(id);
                window.confirm("updated")
               
                  axios.put(`https://gorest.co.in/public/v2/users/${this.props.id}`,{userObj},
                  {
                    method:'PUT',
                    
                    headers:
                    {
                      Authorization:'Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca'
                    }
                  })
                  .then(res =>
                   {
                    // console.log(res);
                    this.props.getUsers()
                  
                   })
                   .catch(error =>
                    {
                        console.log(error)
                    })
                    this.closeModel()
              }


      // delate row function      
   delaterow=(id)=>
  {
    console.log(id);
    window.confirm("Delate the row")
   
      axios.delete(`https://gorest.co.in/public/v2/users/${this.props.id}`,
      {
        method:'DELETE',
        headers:
        {
          Authorization:'Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca'
        }
      })
      .then(res =>
       {
        console.log(res);
        this.props.getUsers()
      
       })
       .catch(error =>
        {
            console.log(error)
        })
        
  }


  // modal box properties
  style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  render()
  {
    // console.log(this.state.name);
  return (
    <React.Fragment>
      <th>
      <Button variant="contained" onClick={()=>{this.openModel(); this.setUserData(this.props.users.find(x=>x.id===this.props.id))}}>edit</Button>
      </th>
      
      
      <th>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} style={{backgroundColor:"red"}} onClick={ 
        this.delaterow
      }>delate</Button>
      </th>

     
      <ModeelboxForm  openModel={this.openModel} closeModel={this.closeModel} handleChange={this.handleChange}></ModeelboxForm>

      {/* <Modal open={this.state.isOpen} className="modal">
      <Box sx={this.style}>
                <Typography id="modal-modal-title" >
               
                    <input type="text"   placeholder='name' name="name" value={this.state.name} onChange={(data)=>{this.setState({name:data.target.value})}}></input><br></br>

                    <input type="text" placeholder='email' name="email" value={this.state.email}  ></input><br></br>

                    <input type="text" placeholder='gender' name="gender" value={this.state.gender}  onChange={(data)=>{this.setState({gender:data.target.value})}}></input><br></br>

                    <input type="text" placeholder='status' name="status" value={this.state.status}  onChange={(data)=>{this.setState({status:data.target.value})}}></input><br></br>

                    <button onClick={this.updateUserdata}>UPDATE</button>

                    <button onClick={this.closeModel}>CANCEL</button>
                </Typography>
                </Box>
      </Modal> */}
     </React.Fragment>

   
  );
    }
}

export default UserEditData
