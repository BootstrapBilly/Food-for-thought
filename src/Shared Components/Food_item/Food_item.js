import React, { useState, useRef, useEffect } from 'react'

//css
import classes from './Food_item.module.css'

//components
import VisibleSection from "./Components/Visible_section/Visible_section"
import ExpandedSection from "./Components/Expanded_section/Expanded_section"

//assets
import expand from "../../Assets/Icon/expand.svg"

export const Food_item = props => {

    //=Refs
    const collapsed_section = useRef(null)
    const middle_section = useRef(null)
    const expanded_section = useRef(null)

    const [expanded, set_expanded] = useState(false)
    const [current_height, set_current_height] = useState(0)

    useEffect(() => {

        if (expanded) set_current_height(collapsed_section.current.clientHeight + expanded_section.current.clientHeight + middle_section.current.clientHeight)
        else set_current_height(collapsed_section.current.clientHeight)

    }, [expanded])

    return (

        <div className={classes.container} style={{ height: `${current_height}px` }}>

            <div className={classes.collapsed_section_wrapper} ref={collapsed_section}>

                <VisibleSection data={props.data} />

            </div>


            <div className={classes.icon_container} ref={middle_section}>

                <img src={expand} className={[classes.toggle_icon, expanded && classes.toggle_icon_expanded].join(" ")} alt="Expand or collapse the food item" onClick={() => set_expanded(!expanded)} />

                <span className={classes.icon_caption}>{expanded ? "Less Detail" : "More Detail"}</span>

            </div>

            <div className={[classes.expanded_section_wrapper, expanded && classes.expanded_section_animator].join(" ")} style={{ visibility: !expanded && "hidden" }} ref={expanded_section}>

                <ExpandedSection data={props.data} />

            </div>

        </div>

    )

}

export default Food_item
