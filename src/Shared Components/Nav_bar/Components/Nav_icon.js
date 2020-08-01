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

    //!effects
    useEffect(() => { set_active_icon(url) }, [url])//whenever the url changes, set the icon to match so it is active

    //_functions
    const handle_redirect = () => {

        dispatch(clear_filters())//clear any active filters before navigating
        dispatch(clear_search_string())//clear the search string before navigating
        set_redirect(props.to)//redirect them to their desired page

    }

    return (

        <div className={classes.container} onClick={() => handle_redirect()}>

            <img

                src={require(`../../../Assets/Icon/${props.source}.svg`)}
                alt={props.alt}
                className={[classes.icon, active_icon === props.to && classes.active_icon].join(" ")}
                style={{ backgroundColor:primary}}

            />

            <span className={[classes.text, active_icon === props.to && classes.active_text].join(" ")} style={{fontSize:`${font_size * 0.8}px`}}>{props.text}</span>

            {/*Whenever the redirect state at the top is set, redirect becomes truish and the component is rendered, which redirects to the desired route. The state is set by clicking an icon on the icon bar */

                redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Nav_icon