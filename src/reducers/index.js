import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

const initialState = {
  fetching: false,
  number: 23,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.types) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false };
    case API_CALL_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
}
