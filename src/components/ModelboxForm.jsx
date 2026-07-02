import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import Button from "@mui/material/Button";

class ModelboxForm extends Component {
  constructor(props) {
    super(props);
  }

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
    return (
      <div>
        {!!this.props.isOpen && (
          <Modal open={this.props.isOpen} className="modal">
            <Box sx={this.style}>
              <Typography id="modal-modal-title">
                {this.props.newUser.id == "" ? (
                  <h1 style={{ marginLeft: "90px" }}>CREATE USER</h1>
                ) : (
                  <h1 style={{ marginLeft: "90px" }}>EDIT USER DETAILS</h1>
                )}

                <label>Name:</label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={this.props.newUser.name}
                  onChange={this.props.handlechange}
                />
                <br />
                <label> Email: </label>
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={this.props.newUser.email}
                  onChange={this.props.handlechange}
                  disabled={this.props.newUser.id != ""}
                />
                <br />
                <label> Gender: </label>
                <br />
                <input
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={this.props.newUser.gender}
                  onChange={this.props.handlechange}
                />
                <br />
                <label>Status:</label>
                <br />
                <input
                  type="text"
                  placeholder="Status"
                  name="status"
                  value={this.props.newUser.status}
                  onChange={this.props.handlechange}
                />
                <br />
                <div style={{ marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    onClick={this.props.newUser.id == "" ? this.props.createUser : this.props.updateUser}
                    style={{ marginRight: "1rem" }}
                  >
                    {this.props.newUser.id == "" ? "Add User" : "Update"}
                  </Button>

                  <Button variant="contained" onClick={this.props.closeModel}>
                    CANCEL
                  </Button>
                </div>
              </Typography>
            </Box>
          </Modal>
        )}
      </div>
    );
  }
}

export default ModelboxForm;
