import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCH_CHAR = "FETCH_CHAR";
export const FETCH_CHAR_SUCCESS = "FETCH_CHAR_SUCCESS";
export const FETCH_CHAR_FAILURE = "FETCH_CHAR_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChars = () => dispatch => {
  dispatch({ type: FETCH_CHAR });
  axios
    .get("https://swapi.co/api/people")
    .then(res => {
      dispatch({ type: FETCH_CHAR_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({
        type: FETCH_CHAR_FAILURE,
        payload: err
      });
    });
};
