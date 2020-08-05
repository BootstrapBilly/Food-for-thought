import React, { useState, useEffect } from 'react'

//css
import classes from './Favourites.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux action creators
import { send_request } from "../../Store/Actions/0_send_request_action"

//components
import FoodItem from "../../Shared Components/Food_item/Food_item"

//functions
import handle_food_filters from "../../util/handle_food_filters"

//assets
import empty from "../../Assets/Graphics/empty.svg"
import not_found from "../../Assets/Graphics/not_found.svg"

//functions
import handle_response from "./functions/handle_response"

export const Favourites = () => {

    //?selectors
    const response = useSelector(state => state.request.response)//grab the response from the api
    const filters = useSelector(state => state.filters.filters)//determine which filters are applied (breakfast lunch ect)
    const search_string = useSelector(state => state.search.search_string)//hold the value of the search input

    //*states
    const [favourites, set_favourites] = useState([])//hold the list of favourites(set by the response from the api )
    const [favourites_copy, set_favourites_copy] = useState([])

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    // //!effects
    //only on the first render, fetch all favourites from the database to see if this item is favourites
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({}, "get_favourites", "get")) }, [])

    //run the filters function to decide which food items to show, if no filters or search string is active, then it shows all food items
    //eslint-disable-next-line
    useEffect(() => { handle_food_filters(filters, search_string, favourites_copy, set_favourites) }, [filters, search_string])

    //Whenever the response changes, call the handle_response function
    // eslint-disable-next-line 
    useEffect(() => {handle_response(response, dispatch, set_favourites, set_favourites_copy, filters, search_string)}, [response])

    return (

        <div className={classes.container}>

            <TopBar page={"Favourites"} />

            {!favourites.length ?

                <div className={classes.empty_prompt_container}>

                    <span className={classes.empty_text}>{filters.length || search_string ? "No matches found" : "You have no favourites, add some from the food ideas page !"}</span>

                    <img src={filters.length || search_string ? not_found : empty} alt="Empty favourites graphic" className={classes.empty_graphic} />

                </div>

                : favourites.map((food_item, index) => <FoodItem data={food_item} key={index} />)

            }



            <NavBar />

        </div>

    )

}

export default Favourites
