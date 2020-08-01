import React from 'react'

//css
import classes from "./Middle_toggle_section.module.css"

//assets
import expand from "../../../../Assets/Icon/expand.svg"

//redux hooks
import { useSelector } from "react-redux"

export const Middle_toggle_section = props => {

    //?selectors
    const font_size = useSelector(state => state.font.size)

    return (

        <div className={classes.container}>

            <img

                src={expand}
                className={[classes.toggle_icon, props.expanded && classes.toggle_icon_expanded].join(" ")}
                alt="Expand or collapse the food item"
                onClick={props.handle_toggle}
                
            />

            <span className={classes.icon_caption} style={{fontSize: `${font_size*0.6}px`}}>{props.expanded ? "Less Detail" : "More Detail"}</span>

        </div>

    )

}

export default Middle_toggle_section