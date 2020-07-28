import React, {useEffect, useState} from 'react'

import classes from "./Favourite_button.module.css"

//assets
import Favourite from "../../../../../Assets/Icon/add_favourite.svg"
import Favourite_active from "../../../../../Assets/Icon/add_favourite_active.svg"

//redux hooks
import {useDispatch, useSelector} from "react-redux"

//redux action creators
import {send_request} from "../../../../../Store/Actions/0_send_request_action"

export const Favourite_button = props => {


    //?selectors
    const response = useSelector(state => state.request.response)

    //*states
    const [is_favourited, set_is_favourited] = useState(false)

    // //-config
    const dispatch = useDispatch()

    // //!effects
    useEffect(()=> {

        dispatch(send_request({}, "get_favourites", "get"))

    },[])

    useEffect(()=> {

        if(response && response.data.message === "Favourites retrieved"){

            response.data.favourites.forEach(favourite => {

                if(favourite.title === props.data.title){

                    set_is_favourited(true)

                }

            })

        }

    },[response])

    //_functions
    const handle_toggle_favourite = () => {

        dispatch(send_request(props.data, "toggle_favourite"))

        set_is_favourited(!is_favourited)

    }


    return (

        <div className={classes.container} onClick={() => handle_toggle_favourite()}>

            <img src={is_favourited ? Favourite_active : Favourite} className={classes.favourite_icon} alt={`Add to favourites`} />
            <span className={classes.favourite_caption}>Favourite</span>

        </div>

    )

}

export default Favourite_button
