import { SET_COLLAPSE_FLAG, CLEAR_COLLAPSE_FLAG } from "../Actions/6_handle_collapse_food_items_action"

const initialState = {//set the initial state

   collapse_flag:false,

}

const handle_kcal_re_render = (state = initialState, action) => {

    switch (action.type) {

        case SET_COLLAPSE_FLAG: return { ...state, collapse_flag:true }
        case CLEAR_COLLAPSE_FLAG: return { ...state, collapse_flag:false }

        default:

            return state;
    }

}

export default handle_kcal_re_render
