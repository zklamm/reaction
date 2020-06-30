import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/ListActions";
import EditableListTitle from "./EditableListTitle";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTitleUpdate: (title, callback) => {
      dispatch(actions.updateList({ title }, ownProps.id, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(EditableListTitle);
