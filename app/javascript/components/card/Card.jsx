import React from "react";
import { dueClass, formatDate } from "../../helpers/DateFormat";
import { Link } from "react-router-dom";

const Card = ({ labels, cardId, title, dueDate, isDescription, completed }) => {
  return (
    <Link to={`/cards/${cardId}`}>
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
            {dueDate ? (
              <i
                className={`clock-icon sm-icon ${dueClass(dueDate, completed)}`}
              >
                {formatDate(dueDate)}
              </i>
            ) : null}
            {isDescription ? (
              <i className="description-icon sm-icon"></i>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
