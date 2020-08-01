export const SET_FONT_SCALE = "SET_FONT_SCALE";

export const set_font_scale = (name, size) => async dispatch => dispatch( {type: SET_FONT_SCALE, payload:{size:size, name:name}})



