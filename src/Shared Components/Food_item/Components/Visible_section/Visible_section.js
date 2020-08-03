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
    const dispatch = useDispatch()

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const font_size = useSelector(state => state.font.size)
    const re_render_flag = useSelector(state => state.portion.re_render_flag)

    //*states
    const [kcal_multiplier, set_kcal_multiplier] = useState(1)

    //!effects
    useEffect(() => {

        const portion_preferences = JSON.parse(window.localStorage.getItem(props.data.title))

        if (portion_preferences) set_kcal_multiplier(portion_preferences.multiplier)

        dispatch(clear_flag())

    },[re_render_flag])

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={props.data.thumbnail} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: primary, fontSize: `${font_size * 1.1}px` }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals} style={{ fontSize: `${font_size * 0.85}px` }}> {`Kcals : ${props.data.kcals * kcal_multiplier}`} </span>

            </div>

            <FavouriteButton data={props.data} />

        </div>

    )

}

export default Visible_section
