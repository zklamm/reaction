export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      return state; // Grab new lists from action.payload.board.lists (no cards allowed)
    default:
      return state;
  }
}
