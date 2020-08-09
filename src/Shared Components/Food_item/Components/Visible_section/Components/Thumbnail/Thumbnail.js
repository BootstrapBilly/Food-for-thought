import React, { useEffect, useState } from 'react'

import classes from "./Thumbnail.module.css"

//assets
import Favourite_star_white from "../../../../../../Assets/Icon/favourites-white.svg"
import Favourite_star from "../../../../../../Assets/Icon/favourites.svg"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { send_request } from "../../../../../../Store/Actions/0_send_request_action"

export const Favourite_button = props => {

    //?selectors
    const response = useSelector(state => state.request.response)//grab the response from the api
    const primary = useSelector(state => state.colour.primary)

    //*states
    const [is_favourited, set_is_favourited] = useState(false)//determine whether to show the active favourite or non active icon
    const [show_animation, set_show_animation] = useState(false)//used to show the spin animation when added to favourites

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //!effects
    //only on the first render, fetch all favourites from the database to see if this item is favourites
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({}, "get_favourites", "get")) }, [])

    useEffect(() => {

        if (response && response.data.message === "Favourites retrieved") {//if favourites have been retrieved

            response.data.favourites.forEach(favourite => {//loop through them

                if (favourite.title.toLowerCase() === props.data.title.toLowerCase()) {//checking if this food item is inside (meaning its favourited)

                    set_is_favourited(true)//if it is, set the state to true, meaning the icon will change to the active one

                }

            })

        }
        // eslint-disable-next-line
    }, [response])//re-run the effect whenever the response changes

    useEffect(() => {//this effect is called to cleanup the subscription to the show animation state after it has been played

        if (show_animation) {

            setTimeout(() => {//after .5s

                set_show_animation(false)//set the state to false (which removes the animated class)

            }, 500);

        }

    }, [show_animation])

    //_functions
    const handle_toggle_favourite = () => {//this function is called whenever the user clicks the favourite icon

        if (!is_favourited) set_show_animation(true)//set the show animation state to add the animated class to the icon

        dispatch(send_request(props.data, "toggle_favourite"))//add or remove the favourite from the database

        if (window.location.href.includes("/favourites")) return //if the fooditem was removed from the favourites screen, do not update the icon because the whole card will disappear 

        else set_is_favourited(!is_favourited)//Otherwise update the icon so its not active and favourited anymore

    }

    return (

        <div className={classes.thumbnail_container} onClick={() => handle_toggle_favourite()}>

            <img src={require(`../../../../../../Assets/Food_images/${props.src}.jpg`)} className={classes.thumbnail} alt={`An ${props.alt}`}/>

            <div className={classes.favourite_wrapper} style={{borderColor: is_favourited && `transparent transparent ${primary} transparent`}}>

                <img src={is_favourited ? Favourite_star : Favourite_star_white} alt="Add to your favourites" className={classes.favourite_star} />

            </div>

        </div>

    )

}

export default Favourite_button
