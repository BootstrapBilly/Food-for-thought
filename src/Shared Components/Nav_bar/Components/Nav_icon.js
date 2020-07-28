import React, { useState, useEffect } from 'react'

//css
import classes from './Nav_icon.module.css'

//external
import { Redirect } from "react-router-dom"

export const Nav_icon = props => {

    //-config
    const url = `/${window.location.href.split("/")[3]}`//get the current url in the browser

    //*states
    const [redirect, set_redirect] = useState(null)//this state does nothing until it is set, then when it is, it triggers the redirect (set by clicking an icon)
    const [active_icon, set_active_icon] = useState(null)//determines the currently active icon (to make it poke out of the bar at the bottom)

    useEffect(() => { set_active_icon(url) }, [url])//whenever the url changes, set the icon to match so it is active

    return (

        <div className={classes.container} onClick={() => set_redirect(props.to)}>

            <img

                src={require(`../../../Assets/Icon/${props.source}.svg`)}
                alt={props.alt}
                className={[classes.icon, active_icon === props.to && classes.active_icon].join(" ")}

            />

            <span className={[classes.text, active_icon === props.to && classes.active_text].join(" ")}>{props.text}</span>

            {/*Whenever the redirect state at the top is set, redirect becomes truish and the component is rendered, which redirects to the desired route. The state is set by clicking an icon on the icon bar */

                redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Nav_icon