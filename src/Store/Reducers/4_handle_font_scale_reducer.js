import { SET_FONT_SCALE } from "../Actions/4_handle_font_scale_action"

const initialState = {//set the initial state

    size: window.localStorage.getItem("size") ||20,
    name:window.localStorage.getItem("name") || "large"

}

const handle_font_scale = (state = initialState, action) => {

    switch (action.type) {

        case SET_FONT_SCALE: return { ...state, size:action.payload.size, name:action.payload.name }

        default:

            return state;
    }

}

export default handle_font_scale
