import React from 'react'

import classes from './Source.module.css'

//util
import colours from '../../../../../../util/colours'

export const Source = props => {

    return (

        <div className={classes.container}>

            <a href={props.source} className={classes.title} style={{color:colours.primary}}>{props.additional_text ? props.additional_text : "The source of this nutrition data can be found by tapping here"}</a>

        </div>

    )

}

export default Source
