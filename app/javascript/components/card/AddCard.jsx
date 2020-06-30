import React from "react";

class AddCard extends React.Component {
  state = {
    title: "",
  };

  handleTitleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
            <textarea onChange={this.handleTitleChange} name="add-card">
              {this.state.title}
            </textarea>
            <div className="members"></div>
          </div>
          <a className="button">Add</a>
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
