import React from "react";
import List from "./List";

class ExistingLists extends React.Component {
  state = {
    addDropdownActiveListId: null,
  };

  handleAddCardClick = (listId) => {
    this.setState({
      addDropdownActiveListId: listId,
    });
  };

  handleCancelAddCardClick = () => {
    this.setState({
      addDropdownActiveListId: null,
    });
  };

  render() {
    return (
      <div id="existing-lists" className="existing-lists">
        {this.props.lists.map((list) => (
          <List
            {...list}
            key={list.id}
            isDropdownActive={list.id === this.state.addDropdownActiveListId}
            onAddCardClick={() => this.handleAddCardClick(list.id)}
            onCancelAddCardClick={this.handleCancelAddCardClick}
          />
        ))}
      </div>
    );
  }
}

export default ExistingLists;
