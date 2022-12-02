import {
  ADD_DOG,
  GET_ID,
  GET_DOG,
  GET_TEMPERAMENTS,
  GET_NAME,
} from "./actionTypes";

const initialState = {
  dogs: [],
  detail: {},
  temperaments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DOG:
      return {
        ...state,
        dogs: [...state.dogs, { ...action.payload }],
      };
    case GET_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_DOG:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        dogs: [action.payload],
      };
    default:
      return state;
  }
}
