import React from "react";
import Board from "./Board.jsx";
import * as actions from "../../actions/BoardActions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  let boardId;
  let card;
  if (ownProps.match.url.startsWith("/boards")) {
    boardId = +ownProps.match.params.id;
  } else {
    console.log("here");
    console.log(state.cards);
    card = state.cards.find((card) => {
      return card.id === +ownProps.match.params.id;
    });
    console.log(card);
    if (card) {
      boardId = card.board_id;
    } else {
      boardId = null;
    }
  }

  if (boardId) {
    return {
      boardId: boardId,
      board: state.boards.find((board) => board.id === boardId),
    };
  } else {
    return {
      boardId: null,
      board: null,
    };
  }
  //   board: state.boards.find((board) => {
  //     return board.id === +ownProps.match.params.id;
  //   }),
  // Check if the URL matches /boards, if so boardId will be +ownProps.match.params.id
  // else check whether there is a card in the state based on +ownProps...
  //   and then if there is a card, boardId will be card.board_id
  //   else if there isn't a card yet, boardId will be null
  //      if not a null
  //        return an object, 2 props boardId: boardId, board: logic from line 18
  //      else pass boardId: null
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: (boardId) => {
      dispatch(actions.fetchBoard(boardId));
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
