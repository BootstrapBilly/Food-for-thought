import React from 'react'

import classes from './Source.module.css'

//redux hooks
import { useSelector } from "react-redux"

export const Source = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const font_size = useSelector(state => state.font.size)

    const highlight_here_word = string => {//this function is called to highlight "here" at the end of a string if an additional source has been supplied (look at tuna - mecury concerns)

        const here = string.slice(-4)

        const first_part = string.split("here")[0]

        const full_string = <span>{first_part}<span style={{color:primary}}>{here}</span></span>

        return full_string

    }
    
    return (

        <div className={classes.container} style={{ marginTop: props.additional_text && "5px" }}>

            <a
                href={props.source}
                className={classes.title}
                style={{ color: "black", fontSize: `${font_size * 0.80}px` }}
            >

                {props.additional_text ? highlight_here_word(props.additional_text) 
                : <span>The full micronutrient breakdown and source of this data can be found <span style={{ color: primary }}>here</span></span>}

            </a>

        </div>

    )

}

export default Source
