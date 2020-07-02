import React from "react";

class EditableCardTitle extends React.Component {
  state = {
    title: this.props.title,
  };

  handleTitleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      e.target.blur();
      e.preventDefault();
    }
  };

  render() {
    return (
      <textarea
        className="list-title"
        name="title"
        onChange={this.handleTitleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={() => this.props.onUpdateTitle(this.state.title)}
        style={{ height: "45px" }}
        defaultValue={this.state.title}
      ></textarea>
    );
  }
}

export default EditableCardTitle;
