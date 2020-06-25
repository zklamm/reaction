import React, { Component } from "react";
import Header from "./Header";
import ListContainer from "../list/ListContainer";

class Board extends Component {
  componentDidMount() {
    console.log("Board mounted");
    this.props.onFetchBoard();
  }

  /*
      Header
      ListContainer
      Sidebar
  */

  render() {
    if (this.props.board) {
      return (
        <React.Fragment>
          <Header title={this.props.board.title} />
          <main>
            <ListContainer boardId={this.props.board.id} />
          </main>
          <div id="modal-container"></div>
          <div id="dropdown-container"></div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}
export default Board;
