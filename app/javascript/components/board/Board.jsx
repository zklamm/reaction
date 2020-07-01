import React, { Component } from "react";
import Header from "./Header";
import ListContainer from "../list/ListContainer";

class Board extends Component {
  componentDidMount() {
    if (this.props.boardId) {
      this.props.onFetchBoard(this.props.boardId);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boardId !== this.props.boardId && this.props.boardId) {
      this.props.onFetchBoard(this.props.boardId);
    }
  }

  render() {
    // console.log(this.props.boardId);
    // console.log(this.props.board);
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
