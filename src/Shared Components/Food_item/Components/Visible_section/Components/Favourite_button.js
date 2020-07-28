import React, { useEffect, useState } from 'react'

import classes from "./Favourite_button.module.css"

//assets
import Favourite from "../../../../../Assets/Icon/add_favourite.svg"
import Favourite_active from "../../../../../Assets/Icon/add_favourite_active.svg"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { send_request } from "../../../../../Store/Actions/0_send_request_action"

export const Favourite_button = props => {

    //?selectors
    const response = useSelector(state => state.request.response)//grab the response from the api

    //*states
    const [is_favourited, set_is_favourited] = useState(false)//determine whether to show the active favourite or non active icon

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    // //!effects
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({}, "get_favourites", "get")) }, [])//only on the first render, fetch all favourites from the database to see if this item is favourites

    useEffect(() => {

        if (response && response.data.message === "Favourites retrieved") {//if favourites have been retrieved

            response.data.favourites.forEach(favourite => {//loop through them

                if (favourite.title === props.data.title) {//checking if this food item is inside (meaning its favourited)

                    set_is_favourited(true)//if it is, set the state to true, meaning the icon will change to the active one

                }

            })

        }
        // eslint-disable-next-line
    }, [response])//re-run the effect whenever the response changes

    //_functions
    const handle_toggle_favourite = () => {//this function is called whenever the user clicks the favourite icon

        dispatch(send_request(props.data, "toggle_favourite"))//add or remove the favourite from the database

        set_is_favourited(!is_favourited)//update the state so that the icon changes to the correct one

    }

    return (

        <div className={classes.container} onClick={() => handle_toggle_favourite()}>

            <img

                src={is_favourited ? Favourite_active : Favourite}
                className={classes.favourite_icon}
                alt={`Add to favourites`}

            />

            <span className={classes.favourite_caption}>Favourite</span>

        </div>

    )

}

export default Favourite_button
