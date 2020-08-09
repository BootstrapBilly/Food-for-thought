import React, { useState } from 'react'

import classes from './Content_toggle.module.css'

//redux hooks
import { useSelector } from "react-redux"

//components
import Pros from "../../../../Shared Components/Food_item/Components/Expanded_section/Components/Pros/Pros"
import Cons from "../../../../Shared Components/Food_item/Components/Expanded_section/Components/Cons/Cons"

export const Content_toggle = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const good = useSelector(state => state.colour.good)
    const bad = useSelector(state => state.colour.bad)

    //*states
    const [active_link, set_active_link] = useState("Good")

    const handle_colour_assignment = link => {

        if (link === "Good") return good
        if (link === "Bad") return bad
        if (link === "Links") return primary
    }

    return (

        <div className={classes.container}>

            <div className={classes.bar_container}>

                {["Good", "Bad", "Links"].map(Link =>

                    <span className={classes.toggle_link}
                        style={{ color: active_link === Link && handle_colour_assignment(Link) }}
                        onClick={() => set_active_link(Link)}
                    >{Link}</span>

                )}

            </div>
            <div className={classes.bottom_section}>


                {active_link === "Good" ?

                    <Pros data={props.data.pros} /> : active_link === "Bad" ? <Cons data={props.data.cons} /> : "a"}
            </div>

        </div>

    )

}

export default Content_toggle
