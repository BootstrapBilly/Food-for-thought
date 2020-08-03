import React, { useState, useEffect } from 'react'

//css
import classes from './Nav_icon.module.css'

//external
import { Redirect } from "react-router-dom"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { clear_filters } from "../../../Store/Actions/1_handle_filters_action"
import { clear_search_string } from "../../../Store/Actions/2_handle_search_action"

export const Nav_icon = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const font_size = useSelector(state => state.font.size)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const url = `/${window.location.href.split("/")[3]}`//get the current url in the browser

    //*states
    const [redirect, set_redirect] = useState(null)//this state does nothing until it is set, then when it is, it triggers the redirect (set by clicking an icon)
    const [active_icon, set_active_icon] = useState(null)//determines the currently active icon (to make it poke out of the bar at the bottom)
    const [show_animation, set_show_animation] = useState(false)

    //!effects
    useEffect(() => { set_active_icon(url) }, [url])//whenever the url changes, set the icon to match so it is active

    useEffect(() => {//this effect is used to clean up the subscription to the bounce animation state after it has been played

        if (show_animation) {

            setTimeout(() => {

                set_show_animation(false)

            }, 150);

        }
    }, [show_animation])


    //_functions
    const handle_redirect = () => {

        set_show_animation(true)//set the show animation state to true, so the icon will bounce when selected

        setTimeout(() => {//dont redirect until after 0.3s, so the icon can do its animation

            dispatch(clear_filters())//clear any active filters before navigating
            dispatch(clear_search_string())//clear the search string before navigating
            set_redirect(props.to)//redirect them to their desired page

        }, 150);

    }

    return (

        <div className={classes.container} onClick={() => handle_redirect()}>

            <img

                src={require(`../../../Assets/Icon/${active_icon !== props.to ? props.source + "-grey" : props.source}.svg`)}
                alt={props.alt}
                className={[classes.icon, show_animation && classes.animated_icon].join(" ")}

            />

            <span className={[classes.text, active_icon === props.to && classes.active_text].join(" ")} style={{ fontSize: `${font_size * 0.7}px`, color: primary }}>{props.text}</span>

            {/*Whenever the redirect state at the top is set, redirect becomes truish and the component is rendered, which redirects to the desired route. The state is set by clicking an icon on the icon bar */

                redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Nav_icon