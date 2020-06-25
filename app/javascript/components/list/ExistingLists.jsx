import React from "react";
import List from "./List";

const ExistingLists = ({ lists }) => {
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => (
        <List {...list} key={list.id} />
      ))}
    </div>
  );
};

export default ExistingLists;
