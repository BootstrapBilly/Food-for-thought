import React, {useState, useEffect} from 'react'

//css
import classes from './Nav_icon.module.css'

//external
import { Redirect } from "react-router-dom"

export const Nav_icon = props => {

    const url = `/${window.location.href.split("/")[3]}`

    const [redirect, set_redirect] = useState(null)
    const [active_icon, set_active_icon] = useState(null)

    useEffect(()=> {

        set_active_icon(url)

    },[url])

    return (

        <div className={classes.container} onClick={()=> set_redirect(props.to)}>

            <img src={require(`../../../Assets/Icon/${props.source}.svg`)} alt={props.alt} className={[classes.icon, active_icon === props.to && classes.active_icon].join(" ")} />

            <span className={[classes.text, active_icon === props.to && classes.active_text].join(" ")}>{props.text}</span>

            {redirect && <Redirect to={redirect} />}

        </div>

    )

}

export default Nav_icon