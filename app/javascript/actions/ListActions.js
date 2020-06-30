import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, payload: { list } };
}

export function updateListSuccess(updatedList) {
  return { type: types.UPDATE_LIST_SUCCESS, payload: { list: updatedList } };
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
}
