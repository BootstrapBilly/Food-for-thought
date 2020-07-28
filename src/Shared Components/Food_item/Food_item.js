import React, { useState, useRef, useEffect } from 'react'

//css
import classes from './Food_item.module.css'

//components
import VisibleSection from "./Components/Visible_section/Visible_section"
import ExpandedSection from "./Components/Expanded_section/Expanded_section"
import MiddleToggleSection from "./Components/Middle_toggle_section/Middle_toggle_section"

export const Food_item = props => {

    //=Refs
    //the following refs are used to dynamically calculate the height of the total card, so when it is expanded, it can be animated smoothly without setting a predefined height

    const collapsed_section = useRef(null)//reference to hold the height of the collapsed section (always open)
    const middle_section = useRef(null)//reference to hold the height of the middle (more detail nutton)
    const expanded_section = useRef(null)//reference to hold the height of the expanded section (hidden until the button is clicked)

    //*states
    const [expanded, set_expanded] = useState(false)//determine whether the card is expanded
    const [current_height, set_current_height] = useState(0)//used to hold the total height of the card (set by the effect on line 26)

    useEffect(() => {

        //if its expanded, the height should be the sum of the collapsed, middle and expanded section
        if (expanded) set_current_height(collapsed_section.current.clientHeight + expanded_section.current.clientHeight + middle_section.current.clientHeight)

        //if not, the height should be only the collapsed section
        else set_current_height(collapsed_section.current.clientHeight)

    }, [expanded])

    return (

        <div className={classes.container} style={{ height: `${current_height}px` }}>

            <div className={classes.collapsed_section_wrapper} ref={collapsed_section}>

                <VisibleSection data={props.data} />

            </div>

            <div className={classes.icon_container} ref={middle_section}>

                <MiddleToggleSection expanded={expanded} handle_toggle={() => set_expanded(!expanded)} />

            </div>

            <div

                className={[classes.expanded_section_wrapper, expanded && classes.expanded_section_animator].join(" ")}
                style={{ visibility: !expanded && "hidden" }}
                ref={expanded_section}

            >

                <ExpandedSection data={props.data} />

            </div>

        </div>

    )

}

export default Food_item
