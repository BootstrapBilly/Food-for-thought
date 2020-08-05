import React from 'react'

import classes from './Source.module.css'

//redux hooks
import { useSelector } from "react-redux"

export const Source = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const font_size = useSelector(state => state.font.size)

    return (

        <div className={classes.container} style={{ marginTop: props.additional_text && "10px" }}>

            <a
                href={props.source}
                className={classes.title}
                style={{ color: primary, fontSize: `${font_size * 0.80}px` }}
            >
                
                {props.additional_text ? props.additional_text : "The full micronutrient breakdown and source of this data can be found by tapping here."}

            </a>

        </div>

    )

}

export default Source
