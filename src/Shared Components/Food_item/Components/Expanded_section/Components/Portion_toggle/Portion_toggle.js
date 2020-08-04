import React, { useState, useEffect } from 'react'

import classes from './Portion_toggle.module.css'

//components
import ToggleOption from "./Components/Toggle_option"

//redux hooks
import {useDispatch, useSelector} from "react-redux"

//redux action creators
import { set_kcal_render_flag } from '../../../../../../Store/Actions/5_handle_toggle_portion_action'

export const Portion_toggle = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux

    //*states
    const [active_portion, set_active_portion] = useState(props.default_portion)//this is used to highlight the currently active portion size

    //_functions
    const handle_toggle_portion_size = option => {

        //set the portion size and multiplier in local storage (to be read by the visible section component to change the kcals based on the mutliplier)
        window.localStorage.setItem(props.title, JSON.stringify({ text: option.text, multiplier: option.multiplier }))

        set_active_portion(option.text)//change the highlighted portion size to the one which was selected

        dispatch(set_kcal_render_flag())//flag the kcals for re-render so they display the newly updated portion size's kcals

    }

    //!effects
    useEffect(() => {//this effect is used to set the active portion size upon page render

        //grab the preferences from local storage
        const portion_preferences = JSON.parse(window.localStorage.getItem(props.title))

        //then set the active portion to what is stored in local storage so it is highlighted
        if (portion_preferences) set_active_portion(portion_preferences.text)

    },[props.title])

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{fontSize:font_size * 1.1 + "px"}}>Portion size</span>

            <div className={classes.option_wrapper}>

                {props.toggle_options.map((option, index) =>

                    <ToggleOption key={index} option={option} default_portion={props.default_portion} active_portion={active_portion} handle_toggle_portion_size={(option) => handle_toggle_portion_size(option)} />

                )}

            </div>

        </div>

    )

}

export default Portion_toggle
