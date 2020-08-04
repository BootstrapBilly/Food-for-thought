import React, {useEffect, useState} from 'react'

import classes from './Toggle_option.module.css'

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//util
import capitalizeFirstChar from '../../../../../../../util/capitalise_first'

//redux action creators
import { send_request } from '../../../../../../../Store/Actions/0_send_request_action'
import { set_kcal_render_flag } from '../../../../../../../Store/Actions/5_handle_toggle_portion_action'

export const Toggle_option = props => {

    //-config
    const dispatch = useDispatch()

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab the colours from redux
    const contrast = useSelector(state => state.colour.contrast)
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux
    const response = useSelector(state => state.request.response)

    useEffect(() => {

        dispatch(send_request({ title: props.title }, "get_portion_size"))

    }, [props.title])


    useEffect(() => {

        if (response && response.data.message === "Portion size data retrieved" && response.data.details.title === props.title) {

           props.change_active_portion(response.data.details.text)

        }

    }, [response])

    const handle_portion_select = () => {

        dispatch(send_request({ title: props.title, text: props.option.text, multiplier: props.option.multiplier }, "set_portion_size"))
        props.change_active_portion(props.option.text)
        dispatch(set_kcal_render_flag())

    }

    return (

        <div className={classes.container} onClick={() => handle_portion_select()}

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