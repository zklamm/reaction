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
    card = state.cards.find((card) => {
      return card.id === +ownProps.match.params.id;
    });
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
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: (boardId) => {
      dispatch(actions.fetchBoard(boardId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
