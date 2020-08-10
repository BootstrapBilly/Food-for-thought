import React from 'react'

import classes from './Rating.module.css'

//redux hooks
import { useSelector } from "react-redux"

export const Rating = props => {

    //?selectors
    const font_size = useSelector(state => state.font.size)

    const get_bottom_offset = font_size => {

        switch(font_size){

            case "14": return "32px"
            case "17": return "24px"
            case "20": return "13px"
            case "24": return "8px"
        }

    }

    return (

        <div className={classes.container} style={{bottom:get_bottom_offset(font_size)}}>

            {[0, 1, 2, 3, 4].map((circle, index) =>

                <span class="fa fa-star"
                    key={index}
                    style={{ color: index < props.rating ? "orange" : "grey", transform:"scale(1.2)", marginLeft:"3px"}}>

                </span>

            )}

        </div>

    )

}

export default Rating
