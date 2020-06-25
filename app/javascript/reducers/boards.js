export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS":
      return action.boards;
    case "FETCH_BOARD_SUCCESS":
      const excludedBoards = state.filter((board) => {
        return board.id !== action.payload.board.id;
      });

      const { lists, ...boardWithoutLists } = action.payload.board;

      return excludedBoards.concat(boardWithoutLists);
    case "CREATE_BOARD_SUCCESS":
      const newBoard = action.board;
      return state.concat(newBoard);
    default:
      return state;
  }
}
