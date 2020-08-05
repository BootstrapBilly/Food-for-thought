//this function is used to show and hide the colour picker
//it sets the state to the name of the colour to be changed e.g. primary, contrast, good or bad
//the active colour picker is then passed to the colour picker child component so it renders the colour picker for the right colour and shows the current colour

const handle_colour_picker_toggle = (colour, active_colour_picker, set_active_colour_picker) => {

    if (active_colour_picker === colour) return set_active_colour_picker(false)//if its already active, hide it
    else set_active_colour_picker(colour)//otherwise set the colour picker to the desired colour

}

export default handle_colour_picker_toggle