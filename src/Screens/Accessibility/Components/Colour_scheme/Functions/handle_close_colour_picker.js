//this function is used to close the colour picker and reset the new colour which it had selected

const close_picker = (set_active_colour_picker, set_new_colour) => {

    set_active_colour_picker(false)//clear the active colour picker
    set_new_colour(null)//clear the newly selected colour

}

export default close_picker