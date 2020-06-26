import React from "react";
import { connect } from "react-redux";
import AddList from "./AddList";

const mapDispatchToProps = (dispatch, ownProps) => {
  // ...
};

const mapStateToProps = (state, ownProps) => {
  // ...
};

class AddListContainer extends React.Component {
  state = {
    addInputOpen: false,
  };

  handleAddClick = () => {};

  handleSubmitClick = () => {};

  handleCancelAddClick = () => {};

  render() {
    <AddList
      onAddClick={this.handleAddClick}
      onSubmitClick={this.handleSubmitClick}
      onCancelAddClick={this.handleCancelAddClick}
    />;
  }
}

export default connect(null, mapDispatchToProps)(AddListContainer);
