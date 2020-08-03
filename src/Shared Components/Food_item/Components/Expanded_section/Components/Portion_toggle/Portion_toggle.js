import React, { useState, useEffect } from 'react'

import classes from './Portion_toggle.module.css'

//components
import ToggleOption from "./Components/Toggle_option"

//redux hooks
import {useDispatch} from "react-redux"

//redux action creators
import { set_kcal_render_flag } from '../../../../../../Store/Actions/5_handle_toggle_portion_action'

export const Portion_toggle = props => {

    //-config
    const dispatch = useDispatch()

    const [active_portion, set_active_portion] = useState(props.default_portion)

    const handle_toggle_portion_size = option => {

        window.localStorage.setItem(props.title, JSON.stringify({ text: option.text, multiplier: option.multiplier }))
        set_active_portion(option.text)
        dispatch(set_kcal_render_flag())

    }

    //!effects
    useEffect(() => {

        const portion_preferences = JSON.parse(window.localStorage.getItem(props.title))

        if (portion_preferences) set_active_portion(portion_preferences.text)

    })

    return (

        <div className={classes.container}>

            <span className={classes.title}>Portion size</span>

            <div className={classes.option_wrapper}>

                {props.toggle_options.map(option =>

                    <ToggleOption option={option} default_portion={props.default_portion} active_portion={active_portion} handle_toggle_portion_size={(option) => handle_toggle_portion_size(option)} />

                )}

            </div>

        </div>

    )

}

export default Portion_toggle
