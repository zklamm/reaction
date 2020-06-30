import React from "react";

class AddCard extends React.Component {
  state = {
    title: "",
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleReset = () => {
    this.props.onCancelAddCardClick();
    this.setState({
      title: "",
    });
  };

  handleSubmitNewCard = () => {
    this.props.onSubmitNewCard(this.state.title, this.handleReset);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={`add-dropdown add-bottom ${
            this.props.isDropdownActive ? "active-card" : ""
          }`}
        >
          <div className="card">
            <div className="card-info"></div>
            <textarea
              onChange={this.handleTitleChange}
              name="add-card"
              defaultValue={this.state.title}
            ></textarea>
            <div className="members"></div>
          </div>
          <a onClick={this.handleSubmitNewCard} className="button">
            Add
          </a>
          <i
            onClick={this.props.onCancelAddCardClick}
            className="x-icon icon"
          ></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>
        <div
          onClick={this.props.onAddCardClick}
          className="add-card-toggle"
          data-position="bottom"
        >
          Add a card...
        </div>
      </React.Fragment>
    );
  }
}

export default AddCard;
