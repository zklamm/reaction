import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import AddCard from "./AddCard";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitNewCard: (title, callback) => {
      dispatch(actions.createCard({ title }, ownProps.listId, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddCard);
