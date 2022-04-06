// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import React, { Component } from "react";




 class Edit extends Component{

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
              
            
   delaterow=(id)=>
  {
    console.log(id);
    window.confirm("Delate the row")
   
      axios.delete(`https://gorest.co.in/public/v2/users/${this.props.id}`,{
        method:'DELETE',
        headers:{
          Authorization:'Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca'
        }
      })
      .then(res => {
        console.log(res);
        this.props.getUsers()
      
       })
       .catch(error =>
        {
            console.log(error)
        })
        
  }
  render()
  {
  return (
    
      <th>
      <Button variant="contained" onClick={this.props.openModel}>edit</Button>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} style={{backgroundColor:"red"}} onClick={ 
        this.delaterow
      }>delate</Button>
      </th>
   
  );
    }
}

export default  Edit
