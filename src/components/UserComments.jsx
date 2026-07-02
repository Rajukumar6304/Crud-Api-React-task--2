import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

class UserComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userComments: [],
      usercomment: {
        email: "",
        title: "",
        body: "",
      },
    };
  }

  componentDidMount() {
      this.getUsertodo()
  }

  //get particular usercomment
  getUsertodo=()=>{
    axios
      .get(
        `https://gorest.co.in/public/v2/posts/${this.props.post_id}/comments`,
        {
          headers: {
            Authorization:
              "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
          },
        }
      )
      .then((res) => this.setState({ ...this.state, userComments: res.data }))
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      usercomment: {
        ...this.state.usercomment,
        [event.target.name]: event.target.value,
      },
    });
  };

  //creating comment for particular user
  createUsercomment = () => {
    console.log(this.state.usercomment);
    
    axios
      .post(
        `https://gorest.co.in/public/v2/posts/${this.props.post_id}/comments`,
        this.state.usercomment,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
          },
        }
      )
      .then((res) => {
       
        this.getUsertodo()
        this.setState({
          ...this.state,
          usercomment:{
            email: "",
            name: "",
            body: "", 
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props.post_id);
    return <div className="createComment_main_div">
      <div className="createComment">
        <h1>CREATE COMMENT</h1>
        <h2 >Email:</h2>
          <input
          
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.usercomment.email}
            onChange={this.handleChange}
          />
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Name"  
            name="name"
            value={this.state.usercomment.name}
            onChange={this.handleChange}
          />
          <h2>Body:</h2>
          <textarea
            type="text"
            name="body"
            value={this.state.usercomment.body}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <Button variant="contained" onClick={this.createUsercomment}>
            Create Comment
          </Button>
        </div>


      {!this.state.userComments.length ? (
      <div>
        <h1 style={{ backgroundColor: "yellow" }}>NO COMMENTS</h1>
        
        <hr />
      </div>
      ) : (
      <div>
        <h1>COMMENTS</h1>
        
        {this.state.userComments.map((userPost) => (
          <div>
            <h2 ><label style={{color:"red"}}>email:</label>{userPost.email}</h2>
            <div><label style={{color:"red"}}>name:</label>{userPost.name}</div>
            <div><label style={{color:"red"}}>body:</label>{userPost.body}</div>
            <div><label style={{color:"red"}}>post_id:</label>{userPost.post_id}</div>
            <hr />
          </div>
        ))}
      </div>
    )}
    </div>
  }
}

export default UserComments;
