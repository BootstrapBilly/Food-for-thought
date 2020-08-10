import React, { useEffect, useState } from 'react'

//css
import classes from './Food_ideas.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import FoodItem from "../../Shared Components/Food_item/Food_item"

//data
import food_items from "../../Data/data"

//redux hooks
import { useSelector } from "react-redux"

//functions
import handle_food_filters from "../../util/handle_food_filters"

export const Recommended = () => {

    //?selectors
    const filters = useSelector(state => state.filters.filters)//grab the active filters from redux
    const search_string = useSelector(state => state.search.search_string)//grab the search string from redux

    //*states
    const [items, set_items] = useState(food_items)//hold the items to display (initialised from the food items in the data)

    //!effects
    //this effect is called to apply filters all available food items, it returns the items which match the filter criteria
    useEffect(() => {handle_food_filters(filters, search_string, food_items, set_items)}, [filters, search_string])

    return (

        <div className={classes.container}>

            <TopBar page={"Food Ideas"} />

            {items.map((item, index) => <FoodItem data={item} key={index} food_ideas />)}

            <NavBar />

        </div>

    )

}

export default Recommended