import React, { useState, useEffect } from 'react'

import classes from './Toggle_option.module.css'

//redux hooks
import { useSelector } from "react-redux"

//util
import capitalizeFirstChar from '../../../../../../../util/capitalise_first'

export const Toggle_option = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const contrast = useSelector(state => state.colour.contrast)

    //*states
    const [active_size, set_active_size] = useState(props.default_portion)

    //!effects
    useEffect(() => {

        if (props.active_portion) {
            set_active_size(props.active_portion)
        }
    }, [props.active_portion])

    return (

        <div className={classes.container} onClick={props.handle_toggle_portion_size.bind(this, props.option)}

            style={{

                border: `1px solid ${primary}`,
                color: active_size === props.option.text ? contrast : primary,
                backgroundColor: active_size === props.option.text && primary

            }}

        >

            {capitalizeFirstChar(props.option.text)}

        </div>

    )

}

export default Toggle_option