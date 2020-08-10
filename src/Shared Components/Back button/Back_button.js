import React from 'react'

import classes from './Back_button.module.css'

//assets
import Arrow from "../../Assets/Icon/expand.svg"

export const Back_button = props => {

    return (

        <div className={classes.container} onClick={props.onClick}>

            <img src={Arrow} alt="Go back" className={classes.icon}/>
            
            Go Back

        </div>

    )

}

export default Back_button