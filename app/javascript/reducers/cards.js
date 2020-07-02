import * as types from "../constants/ActionTypes";

const filterOutOldCards = (state, cards) => {
  const set = new Set();

  cards.forEach(({ id }) => set.add(id));

  return state.filter(({ id }) => !set.has(id));
};

export default function cards(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      const cards = action.payload.board.lists.flatMap(({ cards }) => cards);
      return filterOutOldCards(state, cards).concat(cards);
    case types.CREATE_CARD_SUCCESS:
      return state.concat(action.payload.card);
    case types.FETCH_CARD_SUCCESS:
    case types.UPDATE_CARD_SUCCESS:
      return filterOutOldCards(state, [action.payload.card]).concat(
        action.payload.card
      );
    default:
      return state;
  }
}
