import React from "react";

const AddList = ({
  title,
  onTextChange,
  inputOpen,
  onAddClick,
  onSubmitClick,
  onAddCancelClick,
}) => {
  return (
    <div id="new-list" className={inputOpen ? "new-list selected" : "new-list"}>
      <span onClick={onAddClick}>Add a list...</span>
      <input
        type="text"
        value={title}
        placeholder="Add a list..."
        onChange={onTextChange}
      />
      <div>
        <input
          type="submit"
          className="button"
          value="Save"
          onClick={onSubmitClick}
        />
        <i className="x-icon icon" onClick={onAddCancelClick}></i>
      </div>
    </div>
  );
};

export default AddList;
