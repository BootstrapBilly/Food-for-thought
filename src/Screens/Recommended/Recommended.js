import React, {useEffect, useState} from 'react'

//css
import classes from './Recommended.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import FoodItem from "../../Shared Components/Food_item/Food_item"

//data
import food_items from "../../Data/data"

//redux hooks
import {useSelector} from "react-redux"

export const Recommended = () => {

    //?selectors
    const filters = useSelector(state => state.filters.filters)

    //*states
    const [items, set_items] = useState(food_items)

    useEffect(()=> {

        if(filters.length){

            const filtered_items = []

            food_items.forEach(item => {

                item.categories.forEach(category => {

                    filters.forEach(filter => {

                        if(filter === category) {

                            const item_already_inside = filtered_items.find(filtered_item => filtered_item === item)

                            if(!item_already_inside) filtered_items.push(item)
                        }

                    })
                })

            })

            set_items(filtered_items)

        }

        else set_items(food_items)

    },[filters])

    return (

        <div className={classes.container}>

            <TopBar page={"Food Ideas"} />

            {items.map((item, index) => <FoodItem data={item} key={index} />)}

            <NavBar />

        </div>

    )

}

export default Recommended