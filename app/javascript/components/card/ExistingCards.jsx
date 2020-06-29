import React from "react";
import Card from "./Card";

const ExistingCards = ({ cards }) => {
  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => (
        <Card
          labels={card.labels}
          cardId={card.id}
          title={card.title}
          dueDate={card.due_date}
          isDescription={!!card.description}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default ExistingCards;
