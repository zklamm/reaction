import React from "react";
import { MONTHS } from "../../constants/Months";

const formatDate = (date_str) => {
  const date = new Date(date_str);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
};

const Card = ({ labels, cardId, title, dueDate, isDescription }) => {
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
          <i className="clock-icon sm-icon overdue-recent completed">
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
