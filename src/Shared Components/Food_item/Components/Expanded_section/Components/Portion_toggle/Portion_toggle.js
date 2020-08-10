import React, { useState, useEffect } from 'react'

import classes from './Portion_toggle.module.css'

//components
import ToggleOption from "./Components/Toggle_option"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import {send_request} from "../../../../../../Store/Actions/0_send_request_action"

export const Portion_toggle = props => {

    //-config
    const dispatch = useDispatch()//init the usedispatch hook

    //?selectors
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux
    const response = useSelector(state => state.request.response)

    //*states
    const [active_portion, set_active_portion] = useState(props.default_portion)//hold the name of the currently active portion size so it can be highlighted
    const [calorie_multiplier, set_calorie_multiplier] = useState(1)

    //!effects
    //every time the component is rendered, fetch the selected portion size from the backend
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({ title: props.data.title.toLowerCase() }, "get_portion_size")) }, [props.data.title])

    //this effect calls the helper function to handle the response whenever  the component is rendered, or the portion size is changed
    // eslint-disable-next-line
    useEffect(() => { if(response && (response.data.message === "portion preferences saved" || response.data.message === "Portion size data retrieved")) set_calorie_multiplier(response.data.details.multiplier)}, [response])


    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ fontSize: font_size * 1.1 + "px" }}>Calories : {props.data.kcals * calorie_multiplier} </span>

            <div className={classes.option_wrapper}>

                {props.toggle_options.map((option, index) =>

                    <ToggleOption

                        key={index}
                        option={option}
                        title={props.title}
                        default_portion={active_portion}
                        change_active_portion={(portion) => set_active_portion(portion)}
                        active_portion={active_portion}

                    />

                )}

            </div>

        </div>

    )

}

export default Portion_toggle
