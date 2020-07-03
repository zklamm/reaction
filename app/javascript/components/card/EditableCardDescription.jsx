import React from "react";

class EditableCardDescription extends React.Component {
  state = {
    description: this.props.description,
    editing: false,
  };

  handleEditDescriptionClick = () => {
    this.handleToggleEditing();
  };

  handleToggleEditing = () => {
    this.setState((prevState) => ({
      editing: !prevState.editing,
    }));
  };

  handleDescriptionChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateDescription = () => {
    this.props.onUpdateDescription(
      this.state.description,
      this.handleToggleEditing
    );
  };

  handleDiscardDescriptionClick = () => {
    this.setState({
      description: this.props.description,
    });
  };

  render() {
    return (
      <form className="description">
        <p>Description</p>
        {this.state.editing ? (
          <React.Fragment>
            <textarea
              className="textarea-toggle"
              name="description"
              rows="1"
              onChange={this.handleDescriptionChange}
              defaultValue={this.state.description}
              autoFocus
            ></textarea>
            <div>
              <div
                className="button"
                value="Save"
                onClick={this.handleUpdateDescription}
              >
                Save
              </div>
              <i
                className="x-icon icon"
                onClick={this.handleEditDescriptionClick}
              ></i>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span
              id="description-edit"
              className="link"
              onClick={this.handleEditDescriptionClick}
            >
              Edit
            </span>
            <p className="textarea-overlay">{this.props.description}</p>
            <p
              id="description-edit-options"
              className={
                this.props.description === this.state.description
                  ? "hidden"
                  : ""
              }
            >
              You have unsaved edits on this field.{" "}
              <span className="link" onClick={this.handleEditDescriptionClick}>
                View edits
              </span>{" "}
              -{" "}
              <span
                className="link"
                onClick={this.handleDiscardDescriptionClick}
              >
                Discard
              </span>
            </p>
          </React.Fragment>
        )}
      </form>
    );
  }
}

export default EditableCardDescription;
