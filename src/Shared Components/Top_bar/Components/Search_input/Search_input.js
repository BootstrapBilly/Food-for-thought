import React, { useRef, useState } from 'react'

import classes from './Search_input.module.css'

//assets
import Search from "../../../../Assets/Icon/search.svg"

//redux hooks
import {useSelector, useDispatch} from "react-redux"

//redux action creators
import {set_search_string} from "../../../../Store/Actions/2_handle_search_action"

export const Search_input = props => {

    //?selectors
    const search_string = useSelector(state => state.search.search_string)

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

    }

    return (

        <div className={classes.container}>

            {props.search_expanded &&

                <input

                    ref={input_ref}
                    className={classes.input}
                    placeholder={"Search for some food"}
                    autoFocus
                    onChange={e => dispatch(set_search_string(e.target.value))}
                    value={search_string}

                />
                
                }

            <div className={[classes.icon_container, props.search_expanded && classes.icon_container_expanded].join(" ")} onClick={() => handle_expand_search()}>

                <img src={Search} alt="Search for food icon icon" className={[classes.search_icon, props.search_expanded && classes.search_icon_expanded].join(" ")} />
                <span className={classes.search_caption}>{props.search_expanded ? "Close" : "Search"}</span>

            </div>

        </div>

    )

}

export default Search_input
