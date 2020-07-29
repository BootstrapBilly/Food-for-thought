import React from 'react'

//css
import classes from './colour_picker.module.css'

//external
import { SketchPicker } from 'react-color'

import capitalizeFirstChar from '../../../../../util/capitalise_first'

//redux hooks
import {useSelector} from "react-redux"

const Colour_picker = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const secondary = useSelector(state => state.colour.secondary)
    const contrast = useSelector(state => state.colour.contrast)
    const good = useSelector(state => state.colour.good)
    const bad = useSelector(state => state.colour.bad)

    //-config
    const colours = {

        primary:primary,
        secondary:secondary,
        contrast:contrast,
        good:good,
        bad:bad

    }

    const handle_colour_selection = (colour, event) => {

        props.handle_colour_select(colour, event)
    }

    return (

        <React.Fragment>

            {
                props.active_colour_picker &&

                <div className={classes.container}>

                    <span className={classes.title}>Selecting : 
                    
                        <span style={{color: props.new_colour ? props.new_colour.hex : colours[props.active_colour_picker]}}> {capitalizeFirstChar(props.active_colour_picker)}</span>
                    
                    </span>

                    <SketchPicker color={props.new_colour ? props.new_colour : colours[props.active_colour_picker]} onChange={(colour, event) => handle_colour_selection(colour, event)} />

                    <div className={classes.button_container}>

                        <div className={classes.button} style={{ background:colours.bad, color: colours.contrast }} onClick={props.handle_cancel}>Cancel</div>
                        <div className={classes.button} style={{ background:colours.good, color: colours.contrast }} onClick={props.handle_save}>Save</div>

                    </div>

                </div>

            }

        </React.Fragment>

    )

}

export default Colour_picker
