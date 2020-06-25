import React from "react";
import Board from "./Board.jsx";
import * as actions from "../../actions/BoardActions";
import { connect } from "react-redux";

// class BoardContainer extends React.Component {
//   handleEditBoardName = () => {
//     //...
//   };

//   render() {
//     return <Board onEditBoardName={this.handleEditBoardName} />;
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter(
      (list) => list.board_id === +ownProps.match.params.id
    ),
    board: state.boards.find((board) => {
      return board.id === +ownProps.match.params.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(actions.fetchBoard(+ownProps.match.params.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

// export default BoardContainer;

/*

Hierarchy
=========
- Application
  - BoardsDashboardContainer (Route)
  - BoardContainer (Route)
    - Board
      - Header
      - ListContainer
        -ExistingListsContainer
          -ExistingLists
            - List
              - CardContainer
                - Card
                - NewCard
        - NewList
      - Sidebar
*/
