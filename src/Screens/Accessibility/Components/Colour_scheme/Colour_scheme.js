import React, { useState } from 'react'

//css
import classes from './Colour_scheme.module.css'

import capitalizeFirstChar from '../../../../util/capitalise_first'

//components
import ColorPicker from "./Components/colour_picker"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { handle_primary_change, handle_secondary_change, handle_contrast_change, handle_good_change, handle_bad_change } from '../../../../Store/Actions/3_handle_colour_change_action'


export const Colour_scheme = () => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const secondary = useSelector(state => state.colour.secondary)
    const contrast = useSelector(state => state.colour.contrast)
    const good = useSelector(state => state.colour.good)
    const bad = useSelector(state => state.colour.bad)

    //-config
    const colours = {

        primary: primary,
        secondary: secondary,
        contrast: contrast,
        good: good,
        bad: bad

    }

    //-config
    const dispatch = useDispatch()

    const [active_colour_picker, set_active_colour_picker] = useState(false)
    const [new_colour, set_new_colour] = useState(null)

    const handle_picker_toggle = (colour) => {

        if (active_colour_picker === colour) return set_active_colour_picker(false)

        else set_active_colour_picker(colour)

    }

    const close_picker = () => {

        set_active_colour_picker(false)
        set_new_colour(null)
    }

    const handle_update_colour = () => {

        window.localStorage.setItem(active_colour_picker, new_colour.hex)

        if (active_colour_picker === "primary") dispatch(handle_primary_change(new_colour.hex))
        if (active_colour_picker === "secondary") dispatch(handle_secondary_change(new_colour.hex))
        if (active_colour_picker === "contrast") dispatch(handle_contrast_change(new_colour.hex))
        if (active_colour_picker === "good") dispatch(handle_good_change(new_colour.hex))
        if (active_colour_picker === "bad") dispatch(handle_bad_change(new_colour.hex))

        close_picker()

    }

    return (

        <div className={classes.container}>

            {["primary", "secondary", "contrast", "good", "bad"].map(colour =>

                <div className={classes.colour_select_container}>

                    <span className={classes.colour_name}>{capitalizeFirstChar(colour)} : </span>

                    <div className={classes.colour_box} style={{ background: colours[colour] }} onClick={() => handle_picker_toggle(colour)}></div>

                </div>

            )}

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
