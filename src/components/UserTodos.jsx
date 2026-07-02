import { Button } from "@mui/material";
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class UserTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usertodos: [],
      id: this.props.match.params.id,
      usertodo: {
        title: "",
        status: "",
        due_on: new Date().toISOString(),
      },
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  // get particular user todo
  getTodos = () => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${this.state.id}/todos`, {
        headers: {
          Authorization:
            "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
        },
      })
      .then((res) => this.setState({ usertodos: res.data }))
      .catch((err) => {
        console.log(err);
      });
  };

  // craeting todo for particular user
  createUsertodo = () => {
    console.log(this.state.usertodo);

    axios
      .post(
        `https://gorest.co.in/public/v2/users/${this.state.id}/todos`,
        this.state.usertodo,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer e72e782c3c2431cce22a299161e21c71f8e369f79c92d4502e50bc650fc97cca",
          },
        }
      )
      .then((res) => {
        
        this.getTodos();
        this.setState({
          ...this.state,
          usertodo:{
            title: "",
            status: "",
            due_on: new Date().toISOString(),
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      usertodo: {
        ...this.state.usertodo,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        
        <div className="usertodo_createbg">
          <input
            tppe="text"
            placeholder="Title"
            name="title"
            value={this.state.usertodo.title}
            onChange={this.handleChange}
            style={{ marginRight: "1rem" }}
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={this.state.usertodo.status}
            onChange={this.handleChange}
            style={{ marginRight: "1rem" }}
          />
         

          <Button variant="contained" onClick={this.createUsertodo}>
            Create Todo
          </Button>
        </div>
        {!this.state.usertodos.length ? (
          <div>
            <h1 style={{ backgroundColor: "gray" }}>NO TODOS</h1> <hr />
          </div>
        ) : (
          <div>
            <div></div>
            <h1 style={{ color: "green" }}>UserTodos</h1>
            {this.state.usertodos.map((usertodos) => (
              <div>
                <h2>
                  <label style={{ color: "red" }}>Id:</label>
                  {usertodos.id}
                </h2>
                <h2>
                  <label style={{ color: "red" }}>Title:</label>
                  {usertodos.title}
                </h2>
                <h2>
                  <label style={{ color: "red" }}>Due_on:</label>
                  {usertodos.due_on}
                </h2>
                <h2>
                  <label style={{ color: "red" }}>Status:</label>
                  {usertodos.status}
                </h2>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(UserTodos);
