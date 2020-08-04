import React, { useRef, useState } from 'react'

import classes from './Search_input.module.css'

//assets
import Search from "../../../../Assets/Icon/search.svg"

//redux hooks
import {useSelector, useDispatch} from "react-redux"

//redux action creators
import {set_search_string} from "../../../../Store/Actions/2_handle_search_action"
import { set_collapse_flag } from '../../../../Store/Actions/6_handle_collapse_food_items_action'

export const Search_input = props => {

    //?selectors
    const search_string = useSelector(state => state.search.search_string)
    const font_size = useSelector(state => state.font.size)
    const primary = useSelector(state => state.colour.primary)

    //-config
    const dispatch = useDispatch()

    //=refs
    const input_ref = useRef(null)

    //*states
    const [input_active, set_input_active] = useState(false)

    //_functions
    const handle_expand_search = () => {

        props.handle_expand_search()
        set_input_active(!input_active)
        if(input_active) dispatch(set_search_string(""))

    }

    const handle_input = e => {

        dispatch(set_search_string(e.target.value))
        dispatch(set_collapse_flag())
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
                    style={{borderColor:primary, color:primary}}

                />
                
                }

            <div className={[classes.icon_container, props.search_expanded && classes.icon_container_expanded].join(" ")} onClick={() => handle_expand_search()}>

                <img src={Search} alt="Search for food icon icon" className={[classes.search_icon, props.search_expanded && classes.search_icon_expanded].join(" ")} />
                <span className={classes.search_caption} style={{fontSize: `${font_size*0.7}px`, color: primary }}>{props.search_expanded ? "Close" : "Search"}</span>

            </div>

        </div>

    )

}

export default Search_input
