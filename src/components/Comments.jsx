import React, { Component } from "react";
import axios from "axios";
// import BasicButtons from "./Button";
import Del_Button3 from "./Del_Button3";


class Comments  extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }
    getUsers = ()=>{
        axios.get('https://gorest.co.in/public/v2/comments')
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
                               <th><h1>post_id</h1></th>
                               <th><h1>name</h1></th>
                               <th><h1>email</h1></th>
                               <th><h1>body</h1></th>
                               <th><h1>action</h1></th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                        posts.length?
                        posts.map(post => <tr key={post.id}>
                            <th>{post.id}</th>
                            <th>{post.post_id}</th>
                            <th>{post.name}</th>
                            <th>{post.email}</th>
                            <th>{post.body}</th>
                            {/* <th>
                            <input type="submit">edit</input>
                            <input type="submit">delate</input>
                            </th> */}
                            <Del_Button3 id={post.id} getUsers={this.getUsers}></Del_Button3>
                            </tr>):
                        null
                        
                        
                     }
                       </tbody>
                   </table>
                   
            </div>
        )
    }
}
export default Comments