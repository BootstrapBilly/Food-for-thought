import React from 'react'

//css
import classes from './Recommended.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import FoodItem from "../../Shared Components/Food_item/Food_item"

export const Recommended = () => {

    const food_items = [

        {

            title: "avocado",
            thumbnail: require("../../Assets/Food_images/avocado.jpg"),
            rating: 4,
            kcals: 322,
            source: "https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2",
            pros: ["High in healthy fats", "Low in sugar", "High in many vitamins and minerals including C, K, Folate, Potassium and more"],
            cons: ["Can be expensive", "High in kcalories"]

        },

        {

            title: "egg",
            thumbnail: require("../../Assets/Food_images/egg.jpg"),
            rating: 4,
            kcals: 63,
            source: "https://nutritiondata.self.com/facts/dairy-and-egg-products/111/2",
            pros: ["Cheap to buy", "Low in kcalories", "High in protein", "High in many vitamins and minerals including A, D, B2, B9, B12, Iron, Phosphorous and more"],
            cons: ["Very high in cholesterol (343% of RDA)", "High in saturated fats"]

        }
        
    ]

    return (

        <div className={classes.container}>

            {food_items.map((item, index) => <FoodItem data={item} key={index} />)}

            <NavBar />

        </div>

    )

}

export default Recommended