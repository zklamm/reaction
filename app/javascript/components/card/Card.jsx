import React from "react";
import { dueClass, formatDate } from "../../constants/DateFormat";

const Card = ({ labels, cardId, title, dueDate, isDescription, completed }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {labels.map((label, idx) => (
            <div
              className={`card-label ${label} colorblindable`}
              key={idx}
            ></div>
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

// <div className="card-label green colorblindable"></div>
// <div className="card-label yellow colorblindable"></div>
// <div className="card-label red colorblindable"></div>
// <div className="card-label orange colorblindable"></div>
// <div className="card-label blue colorblindable"></div>
// <div className="card-label purple colorblindable"></div>
export default Card;
