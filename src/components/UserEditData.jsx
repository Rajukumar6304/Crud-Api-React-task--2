import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import React, { Component } from "react";
import ModelboxForm from "./ModelboxForm";
import { Link } from "react-router-dom";

class UserEditData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      newUser: {
        id: this.props.id,
        name: "",
        email: "",
        gender: "",
        status: "",
      },
    };
  }
  //modal box closeing function
  closeModel = () => this.setState({ isOpen: false });

  // modal box open function
  openModel = () => {
    this.setState({ isOpen: true });
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

  // set userdetails to input field
  setUserData = (userObj) => {
    console.log(userObj);
    this.setState({
      id: userObj.id,

      newUser: {
        ...this.state.newUser,
        name: userObj.name,
        email: userObj.email,
        gender: userObj.gender,
        status: userObj.status,
      },
    });
  };

  // update userdata
  updateUser = () => {
    axios
      .put(
        `https://gorest.co.in/public/v2/users/${this.props.id}`,
        this.state.newUser,
        {
          headers: {
            Authorization:
              "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
          },
        }

      )
      .then((res) => {
        
        this.props.getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
    this.closeModel();
  };

  // delete particular user data
  deleteUser = (id) => {
    console.log(id);
    window.confirm("delete the row");

    axios
      .delete(`https://gorest.co.in/public/v2/users/${this.props.id}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
        },
      })
      .then((res) => {
        console.log(res);
        this.props.getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // modal box properties
  style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  render() {
    // console.log(this.state.name);
    return (
      <React.Fragment>
        <th>
          <Button
            variant="contained"
            onClick={() => {
              this.openModel();
              this.setUserData(
                this.props.users.find((x) => x.id === this.props.id)
              );
            }}
          >
            edit
          </Button>
        </th>

        <th>
          <Button style={{ backgroundColor: "#ebde34" }}>
            <Link
              to={`/v2/users/${this.props.id}/todos`}
              style={{ textDecoration: "none", color: "white" }}
            >
              userTodos
            </Link>
          </Button>
        </th>

        <th>
          <Button style={{ backgroundColor: "gray" }}>
            <Link
              to={`/v2/users/${this.props.id}/posts`}
              style={{ textDecoration: "none", color: "white" }}
            >
              UserPost
            </Link>
          </Button>
        </th>

        <th>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            style={{ backgroundColor: "red" }}
            onClick={this.deleteUser}
          >
            DELETE
          </Button>
        </th>

        <ModelboxForm
          //  useredata={this.state.newUser}
          isOpen={this.state.isOpen}
          newUser={this.state.newUser}
          closeModel={this.closeModel}
          updateUser={this.updateUser}
          handlechange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default UserEditData;
