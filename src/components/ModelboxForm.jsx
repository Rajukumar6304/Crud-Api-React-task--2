import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { Component } from "react";


class ModelboxForm extends Component{
    constructor(props){
        super(props)
        
    }

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

    render(){
        return(
             <div>
    
              {!!this.props.isOpen && <Modal open={this.props.isOpen} className="modal">             
                <Box sx={this.style}>
                    <Typography id="modal-modal-title" >
                    
                        <input type="text" placeholder='name' name="name" defalutvalue={this.props.newUser.name} onChange={()=>this.props.handleChange} /><br/>

                        <input type="text" placeholder='email' name="email" defalutvalue={this.props.newUser.email}  onChange={()=>this.props.handleChange} /><br />

                        <input type="text" placeholder='gender' name="gender" defalutvalue={this.props.newUser.gender}  onChange={()=>this.props.handleChange} /><br />

                        <input type="text" placeholder='status' name="status" defalutvalue={this.props.newUser.status}  onChange={()=>this.props.handleChange} /><br />

                        <button  onClick={this.props.addUserdata}>add</button>

                        <button onClick={this.props.closeModel}>CANCEL</button>
                    </Typography>
                </Box>
            </Modal>}
                    </div>
        )
    }
}

export default ModelboxForm