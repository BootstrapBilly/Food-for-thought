import React from 'react'

import classes from './Large_image.module.css'

export const Large_image = props => {

    return (

        <div className={classes.container}>

            <div className={classes.underlay_one}></div>

            <div className={classes.underlay_two}></div>

            <img src={require(`../../../../Assets/Food_images/${props.src}.jpg`)} alt={props.title} className={classes.image} />

        </div>

    )

}

export default Large_image