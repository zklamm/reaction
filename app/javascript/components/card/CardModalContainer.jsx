import React from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";
import * as actions from "../../actions/CardActions";

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.find((card) => {
      return card.id === +ownProps.match.params.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: () => {
      dispatch(actions.fetchCard(+ownProps.match.params.id));
    },
    onUpdateCard: (card, callback) => {
      dispatch(actions.updateCard(card, ownProps.id, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
