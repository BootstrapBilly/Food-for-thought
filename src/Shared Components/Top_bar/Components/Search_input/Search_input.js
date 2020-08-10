import React, { useRef, useState } from 'react'

import classes from './Search_input.module.css'

//assets
import Search from "../../../../Assets/Icon/search.svg"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { set_search_string } from "../../../../Store/Actions/2_handle_search_action"
import { set_collapse_flag } from '../../../../Store/Actions/6_handle_collapse_food_items_action'

export const Search_input = props => {

    //?selectors
    const search_string = useSelector(state => state.search.search_string)
    const font_size = useSelector(state => state.font.size)
    const contrast = useSelector(state => state.colour.contrast)

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //=refs
    const input_ref = useRef(null)//hold a reference to the input so it can be cleared and autofocused

    //*states
    const [input_active, set_input_active] = useState(false)//determine if the search input is open or close

    //_functions
    const handle_toggle_search = () => {

        props.handle_toggle_search()//call the prop handler function to set the input state to open
        set_input_active(!input_active)//set active state to focus or blur/clear the input and show the transition
        if (input_active) dispatch(set_search_string(""))//if the input was open, clear it

    }

    const handle_input = e => {

        dispatch(set_search_string(e.target.value))//set the search string in redux, which will then call the filter function to filter by the search string
        dispatch(set_collapse_flag())//collapse all open food items

    }

    return (

        <div className={classes.container}>

            {props.search_expanded &&

                <input

                    ref={input_ref}
                    className={classes.input}
                    placeholder={"Search for some food"}
                    autoFocus
                    onChange={e => handle_input(e)}
                    value={search_string}
                    style={{ borderColor: contrast, color: contrast }}

                />

            }

            <div className={[classes.icon_container, props.search_expanded && classes.icon_container_expanded].join(" ")} onClick={() => handle_toggle_search()}>

                <img src={Search} alt="Search for food icon icon" className={[classes.search_icon, props.search_expanded && classes.search_icon_expanded].join(" ")} />

                <span className={classes.search_caption} style={{ fontSize: `${font_size * 0.7}px`, color: contrast }}>
                    
                    {props.search_expanded ? "Close" : "Search"}

                </span>

            </div>

        </div>

    )

}

export default Search_input
