import React, { useState } from 'react'

import classes from './Content_toggle.module.css'

//redux hooks
import { useSelector } from "react-redux"

//components
import Pros from "./Components/Pros/Pros"
import Cons from "./Components/Cons/Cons"
import Source from "./Components/Source/Source"
import PortionToggle from "./Components/Portion_toggle/Portion_toggle"

export const Content_toggle = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const good = useSelector(state => state.colour.good)
    const bad = useSelector(state => state.colour.bad)
    const font_size = useSelector(state => state.font.size)

    //*states
    const [active_link, set_active_link] = useState("Good")

    const handle_colour_assignment = link => {

        if (link === "Portion") return "black"
        if (link === "Good") return good
        if (link === "Bad") return bad
        if (link === "Links") return primary

    }

    return (

        <div className={classes.container}>

            <div className={classes.bar_container}>

                {["Portion", "Good", "Bad", "Links"].map(Link =>

                    <span className={classes.toggle_link}

                        style={{ color: active_link === Link && handle_colour_assignment(Link), fontSize: `${font_size * 1}px` }}

                        onClick={() => set_active_link(Link)}

                    >

                        {Link}

                    </span>

                )}

            </div>

            <div className={classes.bottom_section}>

                {
                    active_link === "Portion" ?

                        <PortionToggle

                            toggle_options={props.data.toggle_options}
                            default_portion={props.data.default_portion}
                            title={props.data.title}
                            data={props.data}

                        />

                        : active_link === "Good" ? <Pros data={props.data.pros} />

                            : active_link === "Bad" ? <Cons data={props.data.cons} />

                                : <div className={classes.source_container}>

                                    <Source source={props.data.source} />

                                    {props.data.additional_source && <Source source={props.data.additional_source.url} additional_text={props.data.additional_source.text} />}

                                </div>

                }

            </div>

        </div>

    )

}

export default Content_toggle
