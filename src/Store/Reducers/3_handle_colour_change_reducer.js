import { HANDLE_PRIMARY_CHANGE, HANDLE_SECONDARY_CHANGE, HANDLE_CONTRAST_CHANGE, HANDLE_GOOD_CHANGE, HANDLE_BAD_CHANGE } from "../Actions/3_handle_colour_change_action"

const initialState = {//set the initial state

    primary: window.localStorage.getItem("primary") || "#0f52ba",
    secondary: window.localStorage.getItem("secondary") || "#BA770F",
    contrast: window.localStorage.getItem("contrast") || "white",
    good: window.localStorage.getItem("good") || "green",
    bad: window.localStorage.getItem("bad") || "red",

}

const handle_filters = (state = initialState, action) => {

    switch (action.type) {

        case HANDLE_PRIMARY_CHANGE: return { ...state, primary: `${action.payload}` }
        case HANDLE_SECONDARY_CHANGE: return { ...state, secondary: `${action.payload}` }
        case HANDLE_CONTRAST_CHANGE: return { ...state, contrast: `${action.payload}` }
        case HANDLE_GOOD_CHANGE: return { ...state, good: `${action.payload}` }
        case HANDLE_BAD_CHANGE: return { ...state, bad: `${action.payload}` }

        default:

            return state;
    }

}

export default handle_filters
