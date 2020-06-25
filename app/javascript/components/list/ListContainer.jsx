import React from "react";
import ExistingListsContainer from "./ExistingListsContainer";

/*
List
NewList
*/

const ListContainer = ({ boardId }) => {
  return (
    <div id="list-container" className="list-container">
      <ExistingListsContainer boardId={boardId} />

      <div id="new-list" className="new-list">
        <span>Add a list...</span>
        <input type="text" placeholder="Add a list..." />
        <div>
          <input type="submit" className="button" value="Save" />
          <i className="x-icon icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
