import * as types from "../constants/ActionTypes";

export default function boards(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARDS_SUCCESS:
      return action.payload.boards;
    case types.FETCH_BOARD_SUCCESS:
      const excludedBoards = state.filter((board) => {
        return board.id !== action.payload.board.id;
      });

      const { lists, ...boardWithoutLists } = action.payload.board;

      return excludedBoards.concat(boardWithoutLists);
    case types.CREATE_BOARD_SUCCESS:
      const newBoard = action.payload.board;
      return state.concat(newBoard);
    default:
      return state;
  }
}
