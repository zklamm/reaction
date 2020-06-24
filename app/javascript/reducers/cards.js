const filterOutOldCards = (state, cards) => {
  const set = new Set();

  cards.forEach(({ id }) => set.add(id));

  return state.filter(({ id }) => !set.has(id));
};

export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const cards = action.payload.boards.lists.flatMap(({ cards }) => cards);
      return filterOutOldCards(state, cards).concat(cards);
    default:
      return state;
  }
}
