import React from 'react'

import classes from './Rating.module.css'

export const Rating = props => {

    return (

        <div className={classes.container}>

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
