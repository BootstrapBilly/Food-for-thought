import React from 'react'

import classes from './Visible_section.module.css'

//util 
import Capitalise from "../../../../util/capitalise_first"
import colours from '../../../../util/colours'

//components
import FavouriteButton from "./Components/Favourite_button"

export const Visible_section = props => {

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={props.data.thumbnail} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: colours.primary }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals}> {`Kcals : ${props.data.kcals}`} </span>

            </div>

            <FavouriteButton />

        </div>

    )

}

export default Visible_section
