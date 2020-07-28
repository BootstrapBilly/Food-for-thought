import React from 'react'

//css
import classes from "./Middle_toggle_section.module.css"

//assets
import expand from "../../../../Assets/Icon/expand.svg"

export const Middle_toggle_section = props => {

    return (

        <div className={classes.container}>

            <img

                src={expand}
                className={[classes.toggle_icon, props.expanded && classes.toggle_icon_expanded].join(" ")}
                alt="Expand or collapse the food item"
                onClick={props.handle_toggle}
                
            />

            <span className={classes.icon_caption}>{props.expanded ? "Less Detail" : "More Detail"}</span>

        </div>

    )

}

export default Middle_toggle_section