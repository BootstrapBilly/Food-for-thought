import React, { useState } from 'react'

//css
import classes from './Colour_scheme.module.css'

//util
import capitalizeFirstChar from '../../../../util/capitalise_first'

//components
import ColorPicker from "./Components/colour_picker"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//functions
import handle_colour_picker_toggle from "./Functions/handle_colour_picker_toggle"
import close_colour_picker from "./Functions/handle_close_colour_picker"
import handle_update_colour from "./Functions/handle_update_colour"
import handle_reset from "./Functions/handle_reset_colour_scheme"

export const Colour_scheme = () => {

    //?selectors
    //grab all colours from redux
    const primary = useSelector(state => state.colour.primary)
    const contrast = useSelector(state => state.colour.contrast)// eslint-disable-next-line
    const good = useSelector(state => state.colour.good)// eslint-disable-next-line 
    const bad = useSelector(state => state.colour.bad)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [active_colour_picker, set_active_colour_picker] = useState(false)//determine which colour picker is active (primary, contrast, good or bad)
    const [new_colour, set_new_colour] = useState(null)//hold the newly selected colour (which the active colour picker contains)

    //_functions
    const save_new_colour = () => {//this function is called whenever the user selects a new colour and presses save

        handle_update_colour(active_colour_picker, new_colour, dispatch)//update the colour in local storage and redux
        close_colour_picker(set_active_colour_picker, set_new_colour)//close the picker

    }
    
    return (

        <div className={classes.container}>

            {["primary", "contrast", "good", "bad"].map(colour =>

                <div className={classes.colour_select_container} key={colour}>

                    <span className={classes.colour_name}>{capitalizeFirstChar(colour)} : </span>

                    <div className={classes.colour_box} style={{ 
                        // eslint-disable-next-line
                        background:eval(colour)
                        }} onClick={() => handle_colour_picker_toggle(colour, active_colour_picker, set_active_colour_picker)}></div>

                </div>

            )}

            <div className={classes.reset_button} style={{ backgroundColor: primary, color: contrast }} onClick={() => handle_reset(dispatch)}>Reset Colour Scheme</div>

            <ColorPicker

                active_colour_picker={active_colour_picker}
                new_colour={new_colour}
                handle_colour_select={(colour, event) => set_new_colour(colour)}
                handle_cancel={() => close_colour_picker(set_active_colour_picker, set_new_colour)}
                handle_save={() => save_new_colour()}

            />

        </div>

    )

}

export default Colour_scheme
