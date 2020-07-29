import React from 'react'

import classes from './Visible_section.module.css'

//util 
import Capitalise from "../../../../util/capitalise_first"
import colours from '../../../../util/colours'

//components
import FavouriteButton from "./Components/Favourite_button"

//redux hooks
import {useSelector} from "react-redux"

export const Visible_section = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={props.data.thumbnail} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: primary }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals}> {`Kcals : ${props.data.kcals}`} </span>

            </div>

            <FavouriteButton data={props.data} />

        </div>

    )

}

export default Visible_section
