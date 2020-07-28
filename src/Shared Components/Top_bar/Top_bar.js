import React, { useState } from 'react'

import classes from './Top_bar.module.css'

//util 
import colours from "../../util/colours"

//assets
import Filter from "../../Assets/Icon/filter.svg"
import Search from "../../Assets/Icon/search.svg"

//components
import FilterPanel from "./Components/Filter_panel/Filter_panel"

export const Top_bar = props => {

    const [panel_open, set_panel_open] = useState(false)//determine whether or not the filter panel is in view

    return (

        <div className={classes.container} style={{ background: colours.primary }}>

            <div className={classes.filter_container} onClick={() => set_panel_open(true)}>

                <img src={Filter} alt="Filter food types icon" className={classes.filter_icon} />
                <span className={classes.filter_caption}>Filters</span>

            </div>

            <span className={classes.title}>{props.page}</span>

            <div className={classes.search_container}>

                <img src={Search} alt="Search for food icon icon" className={classes.search_icon} />
                <span className={classes.search_caption}>Search</span>

            </div>

            <FilterPanel open={panel_open} handle_close={()=> set_panel_open(false)} />

        </div>

    )

}

export default Top_bar
