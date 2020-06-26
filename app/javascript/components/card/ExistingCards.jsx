import React from "react";
import Card from "./Card";

const ExistingCards = ({ cards }) => {
  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default ExistingCards;
