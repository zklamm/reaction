import React from "react";
import Card from "./Card";

const ExistingCards = ({ cards }) => {
  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card, idx) => (
        <Card {...card} key={idx} />
      ))}
    </div>
  );
};

export default ExistingCards;
