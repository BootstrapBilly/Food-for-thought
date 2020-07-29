import React, { useState } from 'react'

import classes from './Top_bar.module.css'

//util 
import colours from "../../util/colours"

//assets
import Filter from "../../Assets/Icon/filter.svg"

//components
import FilterPanel from "./Components/Filter_panel/Filter_panel"
import Search from "./Components/Search_input/Search_input"

export const Top_bar = props => {

    const [panel_open, set_panel_open] = useState(false)//determine whether or not the filter panel is in view
    const [search_expanded, set_search_expanded] = useState(false)//determine whether the search input is expanded and visible (also hides the title)

    return (

        <div className={classes.container} style={{ background: colours.primary }}>

            <div className={classes.filter_container} onClick={() => set_panel_open(true)}>

                <img src={Filter} alt="Filter food types icon" className={classes.filter_icon} />
                <span className={classes.filter_caption}>Filters</span>

            </div>

            <FilterPanel open={panel_open} handle_close={() => set_panel_open(false)} />

            <span className={classes.title} style={{display:search_expanded && "none"}}>{props.page}</span>

            <Search handle_expand_search={()=> set_search_expanded(!search_expanded)} search_expanded={search_expanded}/>

        </div>

    )

}

export default Top_bar
