import React, { Component } from "react";
import { createItem, updateItem } from "../../apis/PosApiUsersSeting";
import Header from "../Header";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dataUsers: props.item.dataUsers || "",
      username: props.dataUsers.password || "",
      userID : props.dataUsers.id || ""
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { item, onUpdate } = this.props;
    const { name } = this.state;

    try {
      if (item.id) {
        // Update existing item
        await updateItem(item.id, { name });
        onUpdate();
      } else {
        // Create new item
        await createItem({ name });
        this.setState({ name: "" });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { username } = this.state;
    const {item} = this.props.dataUsers.id;

    return (
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <form onSubmit={this.handleSubmit}>
          <input
            type="password"
            placeholder="Name"
            value={username}
            onChange={this.handleChange}
          />
          <button type="submit">{item ? "Update" : "Create"}</button>
        </form>
      </div>
    );
  }
}

export default Users;
