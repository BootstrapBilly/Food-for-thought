import React from 'react'

//css
import classes from './Recommended.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import FoodItem from "../../Shared Components/Food_item/Food_item"

//data
import food_items from "../../Data/data"

export const Recommended = () => {

    return (

        <div className={classes.container}>

            <TopBar page={"Food Ideas"} />

            {food_items.map((item, index) => <FoodItem data={item} key={index} />)}

            <NavBar />

        </div>

    )

}

export default Recommended