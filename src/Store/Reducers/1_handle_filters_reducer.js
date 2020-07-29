import { TOGGLE_FILTER, CLEAR_FILTERS } from "../Actions/1_handle_filters_action"

const initialState = {//set the initial state

    filters: []

}

const handle_filters = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FILTER:

            const filter_is_active = state.filters.find(active_filter => active_filter === action.payload)

            if (filter_is_active) return { ...state, filters: [...state.filters.filter(active_filter => active_filter !== action.payload)] }

            else return { ...state, filters: [...state.filters, action.payload] }

        case CLEAR_FILTERS:

            return { ...state, filters: [] }

        default:

            return state;
    }

}

export default handle_filters
