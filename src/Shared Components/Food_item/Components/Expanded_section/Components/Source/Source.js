import React from 'react'

import classes from './Source.module.css'

//redux hooks
import {useSelector} from "react-redux"

export const Source = props => {

    const primary = useSelector(state => state.colour.primary)

    return (

        <div className={classes.container}>

            <a href={props.source} className={classes.title} style={{color:primary}}>{props.additional_text ? props.additional_text : "The source of this nutrition data can be found by tapping here"}</a>

        </div>

    )

}

export default Source
