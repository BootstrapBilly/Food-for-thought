export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const toggle_filter = (filter) => async dispatch => dispatch({ type: TOGGLE_FILTER, payload:filter})
export const clear_filters = () => async dispatch => dispatch({ type: CLEAR_FILTERS})


