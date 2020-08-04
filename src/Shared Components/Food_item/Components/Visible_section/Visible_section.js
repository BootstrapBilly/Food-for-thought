import React, { useState, useEffect } from 'react'

import classes from './Visible_section.module.css'

//util 
import Capitalise from "../../../../util/capitalise_first"

//components
import FavouriteButton from "./Components/Favourite_button"

//redux hooks
import { useSelector, useDispatch } from "react-redux"
import { send_request } from '../../../../Store/Actions/0_send_request_action'


export const Visible_section = props => {

    //-config
    const dispatch = useDispatch()//intiialise the usedispatch hook

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab the primary colour from redux
    const font_size = useSelector(state => state.font.size)//grab the font size from redux
    const response = useSelector(state => state.request.response)
    const re_render_flag = useSelector(state => state.portion.re_render_flag)

    //*states
    const [calorie_multiplier, set_calorie_multiplier] = useState(1)

    //!effects
    useEffect(() => {

        dispatch(send_request({ title: props.data.title }, "get_portion_size"))

    }, [props.data.title])

    useEffect(() => {

        if (response && response.data.message === "Portion size data retrieved" && response.data.details.title === props.data.title) {

            set_calorie_multiplier(response.data.details.multiplier)

        }

    }, [response])

    useEffect(()=> {

     if(response && response.data.message === "portion preferences saved" && response.data.details.title === props.data.title){
         
        set_calorie_multiplier(response.data.details.multiplier)
        
     }
    },[response])

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={require(`../../../../Assets/Food_images/${props.data.thumbnail}.jpg`)} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: primary, fontSize: `${font_size * 1.1}px` }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals} style={{ fontSize: `${font_size * 0.85}px` }}> {`Kcals : ${props.data.kcals * calorie_multiplier}`} </span>

            </div>

            <FavouriteButton data={props.data} />

        </div>

    )

}

export default Visible_section
