import React from 'react'

import classes from './Toggle_option.module.css'

//redux hooks
import { useSelector } from "react-redux"

//util
import capitalizeFirstChar from '../../../../../../../util/capitalise_first'

export const Toggle_option = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab the colours from redux
    const contrast = useSelector(state => state.colour.contrast)
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux

    return (

        <div className={classes.container} onClick={props.handle_toggle_portion_size.bind(this, props.option)}

            style={{

                border: `1px solid ${primary}`,
                color: props.active_portion === props.option.text ? contrast : primary,
                backgroundColor: props.active_portion === props.option.text && primary,
                fontSize: font_size * 0.75 + "px"

            }}

        >

            {capitalizeFirstChar(props.option.text)}

        </div>

    )

}

export default Toggle_option