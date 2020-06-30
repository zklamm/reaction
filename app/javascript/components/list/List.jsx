import React from "react";
import EditableListTitleContainer from "./EditableListTitleContainer";
import ExistingCardsContainer from "../card/ExistingCardsContainer";
import AddCardContainer from "../card/AddCardContainer";

const List = ({
  title,
  id,
  isDropdownActive,
  onAddCardClick,
  onCancelAddCardClick,
}) => {
  return (
    <div
      className={`list-wrapper ${
        isDropdownActive ? "add-dropdown-active" : ""
      }`}
    >
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
          <AddCardContainer
            listId={id}
            isDropdownActive={isDropdownActive}
            onAddCardClick={onAddCardClick}
            onCancelAddCardClick={onCancelAddCardClick}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
