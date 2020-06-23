import React from "react";
import Board from "./Board.jsx";
import { connect } from "react-redux";
import apiClient from "../../lib/ApiClient";

class BoardContainer extends React.Component {
  handleEditBoardName: () => {
    //...
  };

  render() {
    return <Board onEditBoardName={this.handleEditBoardName} />;
  }
}

export default BoardContainer;
