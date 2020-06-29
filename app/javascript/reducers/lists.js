const filterOutOldLists = (state, lists) => {
  const set = new Set();

  lists.forEach(({ id }) => set.add(id));

  return state.filter(({ id }) => !set.has(id));
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
    case "CREATE_LIST_SUCCESS":
      return state.concat(action.payload.list);
    case "UPDATE_LIST_SUCCESS":
      return state.map((list) => {
        if (list.id === action.payload.list.id) {
          return Object.assign({}, list, { title: action.payload.list.title });
        } else {
          return list;
        }
      });
    default:
      return state;
  }
}
