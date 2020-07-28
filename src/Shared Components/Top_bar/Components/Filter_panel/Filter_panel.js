import React, { useState, useEffect } from 'react'

import classes from './Filter_panel.module.css'

//util
import colours from '../../../../util/colours'

//external
import { useSwipeable } from 'react-swipeable'

//components
import FilterSquare from "./Components/Filter_square/Filter_square"

//assets
import filter_blue from "../../../../Assets/Icon/filter-blue.svg"

//redux hooks
import {useSelector, useDispatch} from "react-redux"

//redux action creators
import {toggle_filter} from "../.././../../Store/Actions/1_handle_filters_action"

export const Filter_panel = props => {

    //?selectors
    const filters = useSelector(state => state.filters.filters)

    //-config
    const handlers = useSwipeable({//swipeable handler config from - https://github.com/FormidableLabs/react-swipeable

        onSwipedLeft: props.handle_close,//on left swipe, call the prop parent function and close the menu
        preventDefaultTouchmoveEvent: true,
        trackMouse: true

    })//initialise the swiping library

    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [active_filters, set_active_filters] = useState([])

    //!effects
    useEffect(()=> {

        set_active_filters(filters)

    }, [filters])


    //_functions
    const handle_toggle = filter => {dispatch(toggle_filter(filter))}
    
    return (

        <React.Fragment>

            <div {...handlers} className={[classes.container, props.open && classes.container_open].join(" ")} style={{ background: colours.white }}>

                <div className={classes.top_section} style={{ color: colours.primary }}>

                    <div className={classes.top_section_top_row}>

                        <img src={filter_blue} alt={"A filters icon"} className={classes.filters_icon} onClick={props.handle_close} />

                        <span className={classes.title}>Filters </span>

                    </div>

                    <div className={classes.top_section_bottom_row}><span className={classes.sub_title}>Select all which apply </span></div>

                </div>

                <div className={classes.filters_container}>

                    {[
                        { name: "Breakfast", icon: "breakfast" },
                        { name: "Lunch", icon: "lunch" },
                        { name: "Dinner", icon: "dinner" },
                        { name: "Snacks", icon: "snacks" },
                        { name: "Vegetarian", icon: "vegetarian" },
                        { name: "< 200 Kcal", icon: "lessthan" }

                    ].map((filter, index) => <FilterSquare key={index} details={filter} active_filters={active_filters} handle_toggle={filter => handle_toggle(filter)} />)}

                </div>

            </div>


            <div className={classes.collapsible_area} style={{ display: props.open ? "block" : "none" }} onClick={props.handle_close}></div>

        </React.Fragment>

    )

}

export default Filter_panel
