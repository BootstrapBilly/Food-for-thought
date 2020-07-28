import React from 'react'

import classes from "./Favourite_button.module.css"

//assets
import Favourite from "../../../../../Assets/Icon/add_favourite.svg"
import Favourite_active from "../../../../../Assets/Icon/add_favourite_active.svg"

export const Favourite_button = () => {

    const handle_toggle_favourite = () => {

        console.log("favourite")
    }

    return (

        <div className={classes.container} onClick={() => handle_toggle_favourite()}>

            <img src={Favourite} className={classes.favourite_icon} alt={`Add to favourites`} />
            <span className={classes.favourite_caption}>Favourite</span>

        </div>

    )

}

export default Favourite_button
