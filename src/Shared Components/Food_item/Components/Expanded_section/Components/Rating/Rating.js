import React from 'react'

import classes from './Rating.module.css'

//redux hooks
import { useSelector } from "react-redux"

export const Rating = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const font_size = useSelector(state => state.font.size)

    return (

        <div className={classes.container}>

            <span style={{fontSize:`${font_size * 1}px`}}>Our Rating :</span>

            {[0, 1, 2, 3, 4].map((circle, index) =>

                <div
                    key={index}
                    className={classes.circle}
                    style={{ borderColor: primary, backgroundColor: index < props.rating && primary }}>

                </div>

            )}

        </div>

    )

}

export default Rating
