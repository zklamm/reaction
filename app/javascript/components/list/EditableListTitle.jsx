import React from "react";

class EditableListTitle extends React.Component {
  state = {
    title: this.props.title || "",
    editing: false,
  };

  handleTitleClick = () => {
    this.handleToggleEditing();
  };

  handleToggleEditing = () => {
    this.setState((prevState) => ({
      editing: !prevState.editing,
    }));
  };

  handleTitleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleTitleUpdate = () => {
    this.props.onTitleUpdate(this.state.title, this.handleToggleEditing);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  render() {
    return (
      <div>
        {this.state.editing ? (
          <input
            className="list-title"
            onChange={this.handleTitleChange}
            onBlur={this.handleTitleUpdate}
            onKeyPress={this.handleKeyPress}
            type="text"
            name="title"
            value={this.state.title}
          />
        ) : (
          <p onClick={this.handleTitleClick} className="list-title">
            {this.state.title}
          </p>
        )}
      </div>
    );
  }
}

export default EditableListTitle;
