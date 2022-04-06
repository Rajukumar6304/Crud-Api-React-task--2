import { Button, Link } from "@mui/material";
import React, { Component } from "react";

class UserTodos extends Component{
    constructor(props){
        super(props)

    }

    
    render(){
        return(
            <div>
                <React.Fragment>
                    <th>
                         <Button>< Link  to={`/v2/users/${this.props.id}/todos`} >UserTodos</Link></Button>
                    </th>
                    
                </React.Fragment>
                
            </div>
        )
    }
}

export default UserTodos