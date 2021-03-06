import React from 'react'

//css
import classes from "./Option.module.css"

//redux hooks
import { useSelector } from "react-redux"

export const Option = props => {

    //?selectors
    const contrast = useSelector(state => state.colour.contrast)//grab the contrast colour from redux

    return (

        <div className={classes.container} style={{ backgroundColor: contrast }} onClick={props.handle_expand}>

            <img

                src={require(`../../../../Assets/Icon/${props.icon}.svg`)}
                alt={"Colour wheel to select website colour scheme"}
                className={classes.icon}

            />

            <span className={classes.text}>{props.text}</span>

        </div>

    )

}

export default Option
