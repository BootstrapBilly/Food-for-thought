import React, { useState } from 'react'

import classes from './Top_bar.module.css'

//assets
import Filter from "../../Assets/Icon/filter.svg"

//components
import FilterPanel from "./Components/Filter_panel/Filter_panel"
import Search from "./Components/Search_input/Search_input"

//redux hooks
import { useSelector } from "react-redux"

export const Top_bar = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const contrast = useSelector(state => state.colour.contrast)
    const font_size = useSelector(state => state.font.size)

    //*states
    const [panel_open, set_panel_open] = useState(false)//determine whether or not the filter panel is in view
    const [search_expanded, set_search_expanded] = useState(false)//determine whether the search input is expanded and visible (also hides the title)

    return (

        <div className={classes.container} style={{background:primary, color:contrast}}>

            {!props.no_icons &&

                <React.Fragment >

                    <div className={classes.filter_container} onClick={() => set_panel_open(true)}>

                        <img src={Filter} alt="Filter food types icon" className={classes.filter_icon} />
                        <span className={classes.filter_caption} style={{ fontSize: `${font_size * 0.65}px`, color:contrast }}>Filters</span>

                    </div>

                    <FilterPanel open={panel_open} handle_close={() => set_panel_open(false)} />

                </React.Fragment>

            }

            <span className={classes.title} style={{ display: search_expanded && "none", fontSize: `${font_size * 1.5}px` }}>{props.page}</span>

            {!props.no_icons && <Search handle_toggle_search={() => set_search_expanded(!search_expanded)} search_expanded={search_expanded} />}

        </div>

    )

}

export default Top_bar
