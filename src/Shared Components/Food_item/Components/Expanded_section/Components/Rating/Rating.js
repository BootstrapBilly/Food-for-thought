import React from 'react'

import classes from './Rating.module.css'

//util
import colours from '../../../../../../util/colours'

export const Rating = props => {

    return (

        <div className={classes.container}>
            
            Our Rating : 

            {[0,1,2,3,4].map((circle, index) => <div key={index} className={classes.circle} style={{borderColor:colours.primary, backgroundColor:index < props.rating && colours.primary}}></div>)}

        </div>

    )

}

export default Rating
