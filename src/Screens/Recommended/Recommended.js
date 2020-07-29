import React, { useEffect, useState } from 'react'

//css
import classes from './Recommended.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import FoodItem from "../../Shared Components/Food_item/Food_item"

//data
import food_items from "../../Data/data"

//redux hooks
import { useSelector } from "react-redux"

export const Recommended = () => {

    //?selectors
    const filters = useSelector(state => state.filters.filters)
    const search_string = useSelector(state => state.search.search_string)


    const handle_filters = (filters, search_string, food_items) => {

        const filtered_items = []
        const searched_for_items = []

        if (!search_string && filters.length < 1) {
            
            return set_items(food_items)

        }

        if (filters.length) {

            food_items.forEach(item => {

                item.categories.forEach(category => {

                    filters.forEach(filter => {

                        if (filter === category) {

                            const item_already_inside = filtered_items.find(filtered_item => filtered_item === item)

                            if (!item_already_inside) filtered_items.push(item)
                        }

                    })
                })

            })

        }

        if (search_string) {

            let array_to_search;

            if (filters.length) {

                array_to_search = filtered_items

            }

            else { array_to_search = food_items }

            array_to_search.forEach(item => {

                const lowercase_title = item.title.toLowerCase()

                if (lowercase_title.includes(search_string.toLowerCase())) {

                    searched_for_items.push(item)

                }

            })

            return set_items(searched_for_items)

        }

        else if (filters.length) return set_items(filtered_items)

    }

    //*states
    const [items, set_items] = useState(food_items)

    useEffect(() => {


        handle_filters(filters, search_string, food_items)


    }, [filters, search_string])

    return (

        <div className={classes.container}>

            <TopBar page={"Food Ideas"} />

            {items.map((item, index) => <FoodItem data={item} key={index} />)}

            <NavBar />

        </div>

    )

}

export default Recommended