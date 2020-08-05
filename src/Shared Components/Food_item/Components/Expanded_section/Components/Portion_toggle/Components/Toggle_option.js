import React, {useEffect} from 'react'

import classes from './Toggle_option.module.css'

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//util
import capitalizeFirstChar from '../../../../../../../util/capitalise_first'

//redux action creators
import { send_request } from '../../../../../../../Store/Actions/0_send_request_action'

export const Toggle_option = props => {

    //-config
    const dispatch = useDispatch()

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab the colours from redux
    const contrast = useSelector(state => state.colour.contrast)
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux
    const response = useSelector(state => state.request.response)

    // eslint-disable-next-line
    useEffect(() => {dispatch(send_request({ title: props.title.toLowerCase()}, "get_portion_size"))}, [props.title])

    useEffect(() => {

        if (response && response.data.message === "Portion size data retrieved" && response.data.details.title.toLowerCase() === props.title.toLowerCase()) {

           props.change_active_portion(response.data.details.text)

        }
// eslint-disable-next-line
    }, [response])

    const handle_portion_select = () => {

        //update the portion preferences in the db
        dispatch(send_request({ title: props.title.toLowerCase(), text: props.option.text.toLowerCase(), multiplier: props.option.multiplier }, "set_portion_size"))

        props.change_active_portion(props.option.text)//change the active portion state in props to change the highlighted option

    }

    return (

        <div className={classes.container} onClick={() => handle_portion_select()}

            style={{

                border: `1px solid ${primary}`,
                color: props.active_portion.toLowerCase() === props.option.text.toLowerCase() ? contrast : primary,
                backgroundColor: props.active_portion.toLowerCase() === props.option.text.toLowerCase() && primary,
                fontSize: font_size * 0.75 + "px"

            }}

        >

            {capitalizeFirstChar(props.option.text)}

        </div>

    )

}

export default Toggle_option