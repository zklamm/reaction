import React from "react";
import Board from "./Board.jsx";
import * as actions from "../../actions/BoardActions";
import { connect } from "react-redux";
import apiClient from "../../lib/ApiClient";

// class BoardContainer extends React.Component {
//   handleEditBoardName = () => {
//     //...
//   };

//   render() {
//     return <Board onEditBoardName={this.handleEditBoardName} />;
//   }
// }

const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      actions.fetchBoard(+ownProps.match.params.id);
    },
  };
};

export default BoardContainer;

/*

- Create an action for fetching a single board
  - Use apiClient.js
- Create BoardContainer and Board
- Show the Lists and Cards within the board
  - Create own List and Card components

Hierarchy
=========
- Application
  - BoardsDashboardContainer (Route)
  - BoardContainer (Route)
    - Board
      - ListContainer
        - List
          - CardContainer
            - Card

*/
