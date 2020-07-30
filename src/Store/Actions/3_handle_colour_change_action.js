export const HANDLE_PRIMARY_CHANGE = "HANDLE_PRIMARY_CHANGE";
export const HANDLE_SECONDARY_CHANGE = "HANDLE_SECONDARY_CHANGE";
export const HANDLE_CONTRAST_CHANGE = "HANDLE_CONTRAST_CHANGE";
export const HANDLE_GOOD_CHANGE = "HANDLE_GOOD_CHANGE";
export const HANDLE_BAD_CHANGE = "HANDLE_BAD_CHANGE";

export const RESET_COLOUR_SCHEME = "RESET_COLOUR_SCHEME";

export const handle_primary_change = (colour) => async dispatch => dispatch({ type: HANDLE_PRIMARY_CHANGE, payload:colour})
export const handle_secondary_change = (colour) => async dispatch => dispatch({ type: HANDLE_SECONDARY_CHANGE, payload:colour})
export const handle_contrast_change = (colour) => async dispatch => dispatch({ type: HANDLE_CONTRAST_CHANGE, payload:colour})
export const handle_good_change = (colour) => async dispatch => dispatch({ type: HANDLE_GOOD_CHANGE, payload:colour})
export const handle_bad_change = (colour) => async dispatch => dispatch({ type: HANDLE_BAD_CHANGE, payload:colour})

export const reset_colour_scheme = () => async dispatch => dispatch({ type: RESET_COLOUR_SCHEME})



