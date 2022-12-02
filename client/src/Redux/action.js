import {
  ADD_DOG,
  GET_ID,
  GET_DOG,
  GET_TEMPERAMENTS,
  GET_NAME,
} from "./actionTypes";

export const getDog = () => {
  return async function (dispatch) {
    return await fetch("http://localhost:3001/dogs")
      .then((r) => r.json())
      .then((response) => {
        dispatch({
          type: GET_DOG,
          payload: response,
        });
      });
  };
};
export const getId = (id) => {
  return async function (dispatch) {
    return await fetch(`http://localhost:3001/dogs/${id}`)
      .then((r) => r.json())
      .then((response) => {
        dispatch({
          type: GET_ID,
          payload: response,
        });
      });
  };
};
export const getTemperament = () => {
  return async function (dispatch) {
    return await fetch("http://localhost:3001/temperaments")
      .then((r) => r.json())
      .then((response) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: response,
        });
      });
  };
};
export const addDogs = (payload) => {
  return async function (dispatch) {
    return await fetch("http://localhost:3001/dogs", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => {
      dispatch({
        type: ADD_DOG,
        payload: response,
      });
    });
  };
};
export const getName = (name) => {
  return async function (dispatch) {
    return await fetch(`http://localhost:3001/dogs/?name=${name}`)
      .then((r) => r.json())
      .then((response) => {
        dispatch({
          type: GET_NAME,
          payload: response,
        });
      });
  };
};
