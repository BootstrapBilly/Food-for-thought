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

export const Favourites = () => {

    //?selectors
    const response = useSelector(state => state.request.response)//grab the response from the api
    const filters = useSelector(state => state.filters.filters)
    const search_string = useSelector(state => state.search.search_string)

    //*states
    const [favourites, set_favourites] = useState([])//hold the list of favourites(set by the response from the api (line37) )

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    // //!effects
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({}, "get_favourites", "get")) }, [])//only on the first render, fetch all favourites from the database to see if this item is favourites

    useEffect(() => {

        if (response && response.data.message === "Removed from favourites") {//if a favourite has been removed 

            dispatch(send_request({}, "get_favourites", "get"))//fetch them again to display favourites without the removed one

        }
        // eslint-disable-next-line
    }, [response])//Whenever the response changes

    useEffect(() => {

        if (response && response.data.message === "Favourites retrieved") {//if favourites have been retrieved

            set_favourites(response.data.favourites)//set the state of favourites to the ones retreived from the database

        }

        // eslint-disable-next-line
    }, [response])//re-run the effect whenever the response change

    useEffect(() => {

        if (response && response.data.message === "Favourites retrieved") {

            handle_food_filters(filters, search_string, favourites, set_favourites, response)

        }
        // eslint-disable-next-line 
    }, [filters, search_string])

    return (

        <div className={classes.container}>

            <TopBar page={"Favourites"} />

            {!favourites.length ?

                <div className={classes.empty_prompt_container}>

                    <span className={classes.empty_text}>You have no favourites, add some from the food ideas page !</span>
                    <img src={empty} alt="Empty favourites graphic" className={classes.empty_graphic} />

                </div>

                : favourites.map((food_item, index) => <FoodItem data={food_item} key={index} />)

            }



            <NavBar />

        </div>

    )

}

export default Favourites
