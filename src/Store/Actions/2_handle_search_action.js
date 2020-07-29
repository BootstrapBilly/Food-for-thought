export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const CLEAR_SEARCH_STRING = "CLEAR_SEARCH_STRING";

export const set_search_string = (search_string) => async dispatch => dispatch({ type: SET_SEARCH_STRING, payload:search_string})
export const clear_search_string = () => async dispatch => dispatch({ type: CLEAR_SEARCH_STRING})


