import React, { Component } from "react";
import axios from "axios";
// import BasicButtons from "./Button";
import Del_Button4 from "./Del_Button4";


class Todos  extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }
    getUsers = ()=>{
        axios.get('https://gorest.co.in/public/v2/todos')
            .then(response => {
                console.log(response )
                this.setState({posts:response.data})
            })
            .catch(error =>
                {
                    console.log(error)
                })
    }
    componentDidMount()
    {
        this.getUsers()
               
    }
    render()
    {
        const {posts} = this.state
        return(
            <div>
                  <table>
                       <thead>
                           <tr>
                               <th><h1>id</h1></th>
                               <th><h1>user_id</h1></th>
                               <th><h1>title</h1></th>
                               <th><h1>due_on</h1></th>
                               <th><h1>status</h1></th>
                               <th><h1>action</h1></th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                        posts.length?
                        posts.map(post => <tr key={post.id}>
                            <th>{post.id}</th>
                            <th>{post.user_id}</th>
                            <th>{post.title}</th>
                            <th>{post.due_on}</th>
                            <th>{post.status}</th>
                            {/* <th>
                            <input type="submit">edit</input>
                            <input type="submit">delate</input>
                            </th> */}
                            <Del_Button4 id={post.id} getUsers={this.getUsers}></Del_Button4>
                            </tr>):
                        null
                        
                        
                     }
                       </tbody>
                   </table>
                   
            </div>
        )
    }
}
export default Todos