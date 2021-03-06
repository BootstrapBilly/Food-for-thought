import React, { useEffect, useState } from 'react'

//css
import classes from './Food_detail.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import BackButton from "../../Shared Components/Back button/Back_button"
import ContentToggle from "./Components/Content_toggle/Content_toggle"
import LargeImage from "./Components/Large_image/Large_image"

//external
import { withRouter } from 'react-router-dom'

//assets
import FavouriteStar from "../../Assets/Icon/favourites.svg"
import FavouriteStarGrey from "../../Assets/Icon/favourites-grey.svg"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux action creators
import { send_request } from "../../Store/Actions/0_send_request_action"
import capitalizeFirstChar from '../../util/capitalise_first'

export const Food_detail = (props) => {

    //?selectors
    const response = useSelector(state => state.request.response)

    //-config
    const data = props.location.state.data //extract the data passed when redirected from the food item preview
    const from_favourites = props.location.state.favourites//check if this page was reached from the favourites page
    const from_food_ideas = props.location.state.food_ideas//or if it was reached from the food ideas page
    const dispatch = useDispatch()//initialise the usedispatch hook

    //*states
    const [is_favourited, set_is_favourited] = useState(false)//determine whether to show the active favourite or non active icon

    //!effects
    //only on the first render, fetch all favourites from the database to see if this item is favourites
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({}, "get_favourites", "get")) }, [])

    useEffect(() => {

        if (response && response.data.message === "Favourites retrieved") {//if favourites have been retrieved

            response.data.favourites.forEach(favourite => {//loop through them

                if (favourite.title.toLowerCase() === data.title.toLowerCase()) {//checking if this food item is inside (meaning its favourited)

                    set_is_favourited(true)//if it is, set the state to true, meaning the icon will change to the active one

                }

            })

        }
        // eslint-disable-next-line
    }, [response])//re-run the effect whenever the response changes

    //_functions
    const handle_toggle_favourite = () => {//this function is called whenever the user clicks the favourite icon

        dispatch(send_request(data, "toggle_favourite"))//add or remove the favourite from the database

        set_is_favourited(!is_favourited)//Change the icon to the opposite of what it was before

    }

    return (

        <div className={classes.container}>

            <TopBar page={capitalizeFirstChar(data.title)} no_icons />

            <BackButton onClick={() => props.history.goBack()} />

            <img

                src={is_favourited ? FavouriteStar : FavouriteStarGrey}
                alt="Add or remove from favourites"
                className={classes.favourite_star}
                onClick={() => handle_toggle_favourite()}

            />

            <LargeImage src={data.image} />

            <ContentToggle data={data} />

            <NavBar from_favourites={from_favourites} from_food_ideas={from_food_ideas} />

        </div>


    )

}

export default withRouter(Food_detail)
