import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardRequest() {
  return { type: types.FETCH_BOARD_REQUEST };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, payload: { board } };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, payload: { boards } };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, payload: { board } };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, payload: { list } };
}

export function updateListSuccess(updatedList) {
  return { type: types.UPDATE_LIST_SUCCESS, payload: { list: updatedList } };
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards((boards) => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(id) {
  return function(dispatch) {
    dispatch(fetchBoardRequest());
    apiClient.getBoard(id, (board) => dispatch(fetchBoardSuccess(board)));
  };
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, (newBoard) => {
      dispatch(createBoardSuccess(newBoard));

      if (callback) {
        callback(newBoard);
      }
    });
  };
}

export function createList(list, boardId, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, boardId, (newList) => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
}

export function updateList(list, listId, callback) {
  return function(dispatch) {
    apiClient.updateList(list, listId, (updatedList) => {
      dispatch(updateListSuccess(updatedList));

      if (callback) {
        callback();
      }
    });
  };
};
