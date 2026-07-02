import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserComments from "./UserComments";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

class UserPostshere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      isOpen: false,
      userPosts: [],
      userComments: [],
      userpost: {
        title: "",
        body: "",
      },
    };
  }
  //handle model
  openModel = () => {
    this.setState({ isOpen: true });
  };

  //handle model
  closeModel = () => this.setState({ isOpen: false });


  componentDidMount() {
    this.getUserpost();
  }

  // get userposts
  getUserpost = () => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${this.state.id}/posts`, {
        headers: {
          Authorization:
            "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
        },
      })
      .then((res) => this.setState({ userPosts: res.data }))
      .catch((err) => {
        console.log(err);
      });
  };
  
  handleChange = (event) => {
    this.setState({
      ...this.state,
      userpost: {
        ...this.state.userpost,
        [event.target.name]: event.target.value,
      },
    });
  };

  // adding posts for user
  addUserpost = () => {
    console.log(this.state.userpost);
    
    axios
      .post(
        `https://gorest.co.in/public/v2/users/${this.state.id}/posts`,
        this.state.userpost,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
          },
        }
      )
      .then((res) => {
        
        this.closeModel();
        this.setState({
          ...this.state,
          userpost: {
            title: "",
            body: "",
          },
        })
        this.getUserpost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  render() {
    return <div style={{width:"50%", flex:"left", flexDirection:"row" , marginTop:"50px"}}>
        <Button onClick={this.openModel} variant="contained" color="secondary" style={{ marginBottom:"50px"}}>
            CREATE POST
          </Button>
          
        {!this.state.userPosts.length ? (
        <div style={{width:"100%"}}>
          <h1 style={{ backgroundColor: "gray" }}>NO POSTS</h1>
          
      </div>

     ) : (

      <div >
      
        {this.state.userPosts.map((userPost) => (
          <div style={{border:"1px red solid", marginBottom:"10px"}}>
            <h1>USER POST</h1>

            <h2><label style={{color:"blue"}}>Title:</label>{userPost.title}</h2>
            <h2><label style={{color:"blue"}}>User_id:</label>{userPost.user_id}</h2>
            <div>
              
              <h2 style={{color:"blue"}}>Body:</h2>
              {userPost.body}
            </div>

            <UserComments post_id={userPost.id} />
          </div>
        ))}

        
      
      </div>
    )}
    <Modal open={this.state.isOpen} className="modal">
          <Box sx={this.style}>
            <Typography id="modal-modal-title">
              <h1>CREATE POST</h1>
              <label>Title:</label><br />
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={this.state.userpost.title}
                onChange={this.handleChange}
              />
              <br />
                <label>Body:</label><br />
              <input
                type="text"
                placeholder="Body"
                name="body"
                value={this.state.userpost.body}
                onChange={this.handleChange}
              />
              <br />
              <div style={{ marginTop: "1rem" }}>
                <Button onClick={this.addUserpost} variant="contained" style={{ marginRight: "1rem" }}>SAVE POST</Button>

                <Button onClick={this.closeModel} variant="contained">CANCEL</Button>
              </div>
            </Typography>
          </Box>
        </Modal>
        </div>
  }
}

export default withRouter(UserPostshere);
