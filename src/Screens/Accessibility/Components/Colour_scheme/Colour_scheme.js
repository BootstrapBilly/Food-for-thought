import React, { useState } from 'react'

//css
import classes from './Colour_scheme.module.css'

import capitalizeFirstChar from '../../../../util/capitalise_first'

//components
import ColorPicker from "./Components/colour_picker"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { handle_primary_change, handle_contrast_change, handle_good_change, handle_bad_change, reset_colour_scheme } from '../../../../Store/Actions/3_handle_colour_change_action'


export const Colour_scheme = () => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab all colours from redux
    const contrast = useSelector(state => state.colour.contrast)
    // eslint-disable-next-line 
    const good = useSelector(state => state.colour.good)
    // eslint-disable-next-line 
    const bad = useSelector(state => state.colour.bad)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [active_colour_picker, set_active_colour_picker] = useState(false)//determine which colour to change with the colour picker
    const [new_colour, set_new_colour] = useState(null)//hold the newly selected colour (from the colour picker)

    const handle_picker_toggle = (colour) => {//this function is used to show and hide the colour picker

        if (active_colour_picker === colour) return set_active_colour_picker(false)//if its already active, hide it
        else set_active_colour_picker(colour)//otherwise set the colour picker to the desired colour

    }

    const close_picker = () => {//used to close the colour picker

        set_active_colour_picker(false)//clear the active colour picker
        set_new_colour(null)//clear the newly selected colour

    }

    const handle_update_colour = () => {//this function is called whenever the user selects a new colour and presses save

        window.localStorage.setItem(active_colour_picker, new_colour.hex)//set the new colour in local storage

        //dispatch the relevant action depending on what colour they changed
        if (active_colour_picker === "primary") dispatch(handle_primary_change(new_colour.hex))
        if (active_colour_picker === "contrast") dispatch(handle_contrast_change(new_colour.hex))
        if (active_colour_picker === "good") dispatch(handle_good_change(new_colour.hex))
        if (active_colour_picker === "bad") dispatch(handle_bad_change(new_colour.hex))

        close_picker()//close the picker

    }

    const handle_reset = () => {//this function is called when the user presses the reset colour scheme button

        //it removes all of the colours from local storage 
        window.localStorage.removeItem("primary")
        window.localStorage.removeItem("contrast")
        window.localStorage.removeItem("good")
        window.localStorage.removeItem("bad")

        dispatch(reset_colour_scheme())//then resets the colours in redux (which have default options if they are null)
    }

    return (

        <div className={classes.container}>

            {["primary", "contrast", "good", "bad"].map(colour =>

                <div className={classes.colour_select_container}>

                    <span className={classes.colour_name}>{capitalizeFirstChar(colour)} : </span>

                    <div className={classes.colour_box} style={{ 
                        // eslint-disable-next-line
                        background:eval(colour)
                        }} onClick={() => handle_picker_toggle(colour)}></div>

                </div>

            )}

            <div className={classes.reset_button} style={{ backgroundColor: primary, color: contrast }} onClick={() => handle_reset()}>Reset Colour Scheme</div>

            <ColorPicker

                active_colour_picker={active_colour_picker}
                new_colour={new_colour}
                handle_colour_select={(colour, event) => set_new_colour(colour)}
                handle_cancel={() => close_picker()}
                handle_save={() => handle_update_colour()}

            />

        </div>

    )

}

export default Colour_scheme
