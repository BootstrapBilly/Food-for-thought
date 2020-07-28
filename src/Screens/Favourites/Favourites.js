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

export const Favourites = () => {

    //?selectors
    const response = useSelector(state => state.request.response)//grab the response from the api

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

    return (

        <div className={classes.container}>

            <TopBar page={"Favourites"}/>

            {favourites.map((food_item, index) => <FoodItem data={food_item} key={index} />)}

            <NavBar />

        </div>

    )

}

export default Favourites
