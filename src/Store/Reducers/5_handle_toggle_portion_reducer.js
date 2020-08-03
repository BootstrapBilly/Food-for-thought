import { SET_KCAL_RENDER_FLAG, CLEAR_FLAG } from "../Actions/5_handle_toggle_portion_action"

const initialState = {//set the initial state

   re_render_flag:false,

}

const handle_kcal_re_render = (state = initialState, action) => {

    switch (action.type) {

        case SET_KCAL_RENDER_FLAG: return { ...state, re_render_flag:true }
        case CLEAR_FLAG: return { ...state, re_render_flag:false }

        default:

            return state;
    }

}

export default handle_kcal_re_render
