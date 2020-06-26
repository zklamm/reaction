import React from "react";

const AddList = ({ onAddClick, onSubmitClick, onCancelAddClick }) => {
  return (
    <div id="new-list" className="new-list">
      <span onClick={onAddClick}>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input
          type="submit"
          className="button"
          value="Save"
          onClick={onSubmitClick}
        />
        <i className="x-icon icon" onClick={onCancelAddClick}></i>
      </div>
    </div>
  );
};

export default AddList;
