import React from "react";
import { connect } from "react-redux";
import ExistingLists from "./ExistingLists";

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter((list) => list.board_id === +ownProps.boardId),
  };
};

export default connect(mapStateToProps, null)(ExistingLists);
