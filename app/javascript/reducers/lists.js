const filterOutOldLists = (state, newLists) => {
  // TODO: make this more efficient by using hash table
  return state.filter((oldList) => {
    return !newLists.some((newList) => newList.id == oldList.id);
  });
};

const removeCardsFromLists = (lists) => {
  return lists.map(({ cards, ...otherProps }) => ({ ...otherProps }));
};

export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const listsWithoutCards = removeCardsFromLists(
        action.payload.board.lists
      );
      return filterOutOldLists(state, listsWithoutCards).concat(
        listsWithoutCards
      );
    default:
      return state;
  }
}
