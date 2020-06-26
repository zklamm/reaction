import React from "react";
import { connect } from "react-redux";
import ExistingCards from "./ExistingCards";

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.filter((card) => card.list_id === ownProps.listId),
  };
};

export default connect(mapStateToProps, null)(ExistingCards);
