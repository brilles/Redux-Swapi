import { FETCH_CHAR, FETCH_CHAR_SUCCESS, FETCH_CHAR_FAILURE } from "../actions";
const initialState = {
  isLoading: false,
  characters: [],
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CHAR_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
