import React from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";
import DueDateForm from "./DueDateForm";
import Popover from "../shared/Popover";
import * as actions from "../../actions/CardActions";

class CardModalContainer extends React.Component {
  state = {
    popover: {
      visible: false,
      type: null,
      attachedTo: null,
    },
  };

  handleShowPopover = (e, type) => {
    e.stopPropagation();
    this.setState({ popover: { type, attachedTo: e.target, visible: true } });
  };

  handleClosePopover = () => {
    this.setState({
      popover: {
        visible: false,
        type: null,
        attachedTo: null,
      },
    });
  };

  popoverChildren() {
    const type = this.state.popover.type;
    const visible = this.state.popover.visible;
    if (visible) {
      switch (type) {
        case "due-date":
          return (
            <DueDateForm
              dueDate={this.props.card.due_date}
              onClose={this.handleClosePopover}
              onSubmit={() => {}}
              onRemove={() => {}}
            />
          );
        default:
          return null;
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <CardModal
          card={this.props.card}
          onFetchCard={this.props.onFetchCard}
          onUpdateCard={this.props.onUpdateCard}
          onShowPopover={this.handleShowPopover}
          onClosePopover={this.handleClosePopover}
        />
        <Popover {...this.state.popover}>{this.popoverChildren()}</Popover>
      </React.Fragment>
    );
  }
}

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
      dispatch(actions.updateCard(card, +ownProps.match.params.id, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModalContainer);
