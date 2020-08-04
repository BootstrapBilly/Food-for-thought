import React, { useState } from 'react'

import classes from './Portion_toggle.module.css'

//components
import ToggleOption from "./Components/Toggle_option"

//redux hooks
import { useSelector } from "react-redux"

export const Portion_toggle = props => {

    //?selectors
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux

    //*states
    const [active_portion, set_active_portion] = useState(props.default_portion)

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ fontSize: font_size * 1.1 + "px" }}>Portion size</span>

            <div className={classes.option_wrapper}>

                {props.toggle_options.map(option =>

                    <ToggleOption option={option} title={props.title} default_portion={active_portion} change_active_portion={(portion)=> set_active_portion(portion)} active_portion={active_portion} />

                )}

            </div>

        </div>

    )

}

export default Portion_toggle
