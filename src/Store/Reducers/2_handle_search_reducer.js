import { SET_SEARCH_STRING, CLEAR_SEARCH_STRING } from "../Actions/2_handle_search_action"

const initialState = {//set the initial state

    search_string: ""

}

const handle_filters = (state = initialState, action) => {

    switch (action.type) {

        case SET_SEARCH_STRING:

            return { ...state, search_string: action.payload }


        case CLEAR_SEARCH_STRING:

            return { ...state, search_string: "" }

        default:

            return state;
    }

}

export default handle_filters
