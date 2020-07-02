import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, payload: { card } };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, payload: { card } };
}

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
}

export function updateCardSuccess(updatedCard) {
  return { type: types.UPDATE_CARD_SUCCESS, payload: { card: updatedCard } };
}

export function createCard(card, listId, callback) {
  return function (dispatch) {
    dispatch(createCardRequest());
    // TODO: impement the api client method
    // TODO: implement the dispatch action handling in cards.js reducer
    apiClient.createCard(card, listId, (newCard) => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback();
      }
    });
  };
}

export function fetchCard(id) {
  return function (dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(id, (card) => dispatch(fetchCardSuccess(card)));
  };
}

export function updateCard(card, cardId, callback) {
  return function (dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(card, cardId, (updatedCard) => {
      dispatch(updateCardSuccess(updatedCard));

      if (callback) {
        callback();
      }
    });
  };
}
