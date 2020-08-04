import React, { useState, useEffect } from 'react'

import classes from './Visible_section.module.css'

//util 
import Capitalise from "../../../../util/capitalise_first"

//components
import FavouriteButton from "./Components/Favourite_button"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { clear_flag } from '../../../../Store/Actions/5_handle_toggle_portion_action'

export const Visible_section = props => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab the primary colour from redux
    const font_size = useSelector(state => state.font.size)//grab the font size from redux
    const re_render_flag = useSelector(state => state.portion.re_render_flag)//this is set when the user selects a new portion size - used to re-render the kcals with the new value

    //*states
    const [kcal_multiplier, set_kcal_multiplier] = useState(1)//this is used to change the kcals value of a fooditem when the portion size is changed, this state changes

    //!effects
    useEffect(() => {

        const portion_preferences = JSON.parse(window.localStorage.getItem(props.data.title))//grab the portion preferences from local storage

        if (portion_preferences) set_kcal_multiplier(portion_preferences.multiplier)//set the kcal multiplier based on the portion size

        dispatch(clear_flag())//clear the re-render flag
// eslint-disable-next-line 
    },[re_render_flag])

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={require(`../../../../Assets/Food_images/${props.data.thumbnail}.jpg`)} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: primary, fontSize: `${font_size * 1.1}px` }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals} style={{ fontSize: `${font_size * 0.85}px` }}> {`Kcals : ${props.data.kcals * kcal_multiplier}`} </span>

            </div>

            <FavouriteButton data={props.data} />

        </div>

    )

}

export default Visible_section
