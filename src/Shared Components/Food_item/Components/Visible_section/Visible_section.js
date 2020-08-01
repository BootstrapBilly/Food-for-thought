import React from 'react'

import classes from './Visible_section.module.css'

//util 
import Capitalise from "../../../../util/capitalise_first"

//components
import FavouriteButton from "./Components/Favourite_button"

//redux hooks
import {useSelector} from "react-redux"

export const Visible_section = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const font_size = useSelector(state => state.font.size)

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={props.data.thumbnail} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: primary, fontSize: `${font_size * 1.1}px` }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals} style={{ fontSize: `${font_size * 0.85}px` }}> {`Kcals : ${props.data.kcals}`} </span>

            </div>

            <FavouriteButton data={props.data} />

        </div>

    )

}

export default Visible_section
