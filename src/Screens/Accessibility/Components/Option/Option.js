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
{/* 
            <img

                src={require(`../../../../Assets/Icon/expand.svg`)}
                alt={`AN arrow to expand the ${props.text} option`}
                className={[classes.down_arrow, props.open && classes.arrow_expanded].join(" ")}
                
            /> */}

        </div>

    )

}

export default Option
