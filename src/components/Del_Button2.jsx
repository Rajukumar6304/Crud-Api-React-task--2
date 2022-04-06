import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';



export default function Del_Button2(props) {
 
  function delaterow(id)
  {
    console.log(id);
    window.confirm("Delate the row")
   
      axios.delete(`https://gorest.co.in/public/v2/posts/${id}`,{
        method:'DELETE',
        headers:{
          Authorization:'Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca'
        }
      })
      .then(res => {
        console.log(res);
        props.getUsers()
      
       })
       .catch(error =>
        {
            console.log(error)
        })
        
  }

  return (
    <React.Fragment>
      <th>
      <Button variant="contained">edit</Button>
      </th>
      <th>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} style={{backgroundColor:"red"}} onClick={() => {
        delaterow(props.id)
      }}>delate</Button>
      </th>
    </React.Fragment>
  );
}
