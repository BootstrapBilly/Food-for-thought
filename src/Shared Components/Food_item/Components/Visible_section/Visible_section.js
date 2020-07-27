import React, { useState } from 'react'

import classes from './Visible_section.module.css'

//assets
import Favourite from "../../../../Assets/Icon/add_favourite.svg"
import Favourite_active from "../../../../Assets/Icon/add_favourite_active.svg"

//util 
import Capitalise from "../../../../util/capitalise_first"
import colours from '../../../../util/colours'

export const Visible_section = props => {

    //*states
    const [is_favourited, set_is_favourited] = useState(window.localStorage.getItem(props.data.title))
    const [favourite_url, set_favourite_url] = useState(is_favourited ? Favourite_active : Favourite)

    //_functions
    const handle_toggle_favourite = () => {

        if (is_favourited) {

            set_favourite_url(Favourite)
            set_is_favourited(false)
            return window.localStorage.removeItem(props.data.title)

        }
        else {
            set_favourite_url(Favourite_active)
            set_is_favourited(true)
            return window.localStorage.setItem("favourites", true)
        }
    }

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={props.data.thumbnail} className={classes.thumbnail} alt={`An ${props.data.title}`} />

            <div className={classes.text_section}>

                <span className={classes.title} style={{ color: colours.primary }}> {Capitalise(props.data.title)} </span>

                <span className={classes.kcals}> {`Kcals : ${props.data.kcals}`} </span>

            </div>

            <div className={classes.favourite_icon_container} onClick={() => handle_toggle_favourite()}>

                <img src={favourite_url} className={classes.favourite_icon} alt={`Add to favourites`} />
                <span className={classes.favourite_caption}>{is_favourited ? "Remove" : "Favourite"}</span>

            </div>

        </div>

    )

}

export default Visible_section
