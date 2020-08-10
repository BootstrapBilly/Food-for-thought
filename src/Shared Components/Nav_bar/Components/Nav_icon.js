import React, { useState, useEffect } from 'react'

//css
import classes from './Nav_icon.module.css'

//external
import { Redirect } from "react-router-dom"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//functions
import handle_redirect from "./Functions/handle_redirect"

export const Nav_icon = props => {

    //?selectors
    const contrast = useSelector(state => state.colour.contrast)
    const font_size = useSelector(state => state.font.size)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook
    const url = `/${window.location.href.split("/")[3]}`//get the current url in the browser

    //*states
    const [redirect, set_redirect] = useState(null)//this state does nothing until it is set, then when it is, it triggers the redirect (set by clicking an icon)
    const [active_icon, set_active_icon] = useState(null)//determines the currently active icon (to make it poke out of the bar at the bottom)
    const [show_animation, set_show_animation] = useState(false)//set to true whenever a link is clicked, it will apply the animation class, then the handle_redirect function will clean it up after

    //!effects
    useEffect(() => { set_active_icon(url) }, [url])//whenever the url changes, set the icon to match so it is active

    // //_functions
    const assign_active_icon = () => {

        if (active_icon === "/food_detail" && props.to === "/" && props.from_food_ideas) return "recommended"

        if (active_icon === "/food_detail" && props.from_favourites) return "favourites"

        if (active_icon !== props.to) return `${props.source}-grey`
        else return props.source

    }

    return (

        <div className={classes.container} onClick={() => handle_redirect(set_show_animation, dispatch, set_redirect, props)}>

            <img
                a
                src={require(`../../../Assets/Icon/${assign_active_icon()}.svg`)}
                alt={props.alt}
                className={[classes.icon, show_animation && classes.animated_icon].join(" ")}

            />

            <span className={[classes.text, active_icon === props.to && classes.active_text].join(" ")} style={{ fontSize: `${font_size * 0.7}px`, color: contrast }}>{props.text}</span>

            {/*Whenever the redirect state at the top is set, redirect becomes truish and the component is rendered, which redirects to the desired route. The state is set by clicking an icon on the icon bar */

                redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Nav_icon