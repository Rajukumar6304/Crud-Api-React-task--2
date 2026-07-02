import React, { Component } from "react";
import axios from "axios";
import UserEditData from "./UserEditData";
import ModelboxForm from "./ModelboxForm";
import Button from "@mui/material/Button";
import "../App.css";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isOpen: false,
      newUser: {
        id: "",
        name: "",
        email: "",
        gender: "",
        status: "",
      },
    };
  }

  componentDidMount() {
    this.getUsers();
  }
  
  //get all the users data
  getUsers = () => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
        },
      })
      .then((response) => {
        
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Open model box
  openModel = () => {
    this.setState({ isOpen: true });
  };

  //Closed model box
  closeModel = () => {
    this.setState({ isOpen: false });
  };

  createUser = () => {
    console.log(this.state.newUser);

    axios
      .post(`https://gorest.co.in/public/v2/users`, this.state.newUser, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
        },
      })
      .then((res) => {
        
        this.closeModel();
        this.setState({
          ...this.state,
          newUser: {
            id: "",
            name: "",
            email: "",
            gender: "",
            status: "",
          },
        });
        this.getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      newUser: {
        ...this.state.newUser,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <div>
          <Button
            style={{ backgroundColor: "#03fc84", marginTop: "20px" }}
            onClick={this.openModel}
          >
            CreateUser
          </Button>

          <ModelboxForm
            isOpen={this.state.isOpen}
            newUser={this.state.newUser}
            closeModel={this.closeModel}
            handlechange={this.handleChange}
            createUser={this.createUser}
          />
        </div>
        <table cellSpacing={25}>
          <thead style={{ color: "blue" }}>
            <tr>
              <th>
                <h1>ID</h1>
              </th>
              <th>
                <h1>NAME</h1>
              </th>
              <th>
                <h1>EMAIL</h1>
              </th>
              <th>
                <h1>GENDER</h1>
              </th>
              <th>
                <h1>STATUS</h1>
              </th>
              <th>
                <h1>EDIT</h1>
              </th>
              <th>
                <h1>TO-DO</h1>
              </th>
              <th>
                <h1>POSTS</h1>
              </th>
              <th>
                <h1>DELETE</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length
              ? users.map((post) => (
                  <tr key={post.id}>
                    <th>{post.id}</th>
                    <th>{post.name}</th>
                    <th>{post.email}</th>
                    <th>{post.gender}</th>
                    <th>{post.status}</th>

                    <UserEditData
                      users={users}
                      id={post.id}
                      getUsers={this.getUsers}
                      openModel={this.openModel}
                    ></UserEditData>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Users;
