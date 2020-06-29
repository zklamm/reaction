import React from "react";
import EditableListTitleContainer from "./EditableListTitleContainer";
import ExistingCardsContainer from "../card/ExistingCardsContainer";
import AddCardContainer from "../card/AddCardContainer";

const List = ({ title, id }) => {
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <EditableListTitleContainer title={title} id={id} />
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <ExistingCardsContainer listId={id} />
          <AddCardContainer listId={id} />
        </div>
      </div>
    </div>
  );
};

export default List;
