import React from "react";
import { dueClass, formatDate } from "../../constants/DateFormat";

const Card = ({ labels, cardId, title, dueDate, isDescription, completed }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {labels.map((label) => (
            <div className={`card-label ${label} colorblindable`}></div>
          ))}
          <p>{title}</p>
        </div>
        <div className="card-icons">
          <i className={`clock-icon sm-icon ${dueClass(dueDate, completed)}`}>
            {formatDate(dueDate)}
          </i>
          {isDescription ? <i className="description-icon sm-icon"></i> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
