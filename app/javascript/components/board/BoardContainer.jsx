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

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter(
      (list) => list.board_id == +ownProps.match.params.id
    ),
  };
};

const mapDispatchToProps = (_, ownProps) => {
  return {
    onFetchBoard: () => {
      actions.fetchBoard(+ownProps.match.params.id);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

// export default BoardContainer;

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

            
TODO:
- Implement apiClient.getBoard(id, callback(board))
- Implement FETCH_BOARD_SUCCESS action type in lists.js reducer
  - It will take lists from payload and separate out the lists (removing card)
- Implement FETCH_BOARD_SUCCESS action type in cards.js reducer
  - First, create reducer
  - Then extract all cards, updating the state
- Other stuff…
*/
