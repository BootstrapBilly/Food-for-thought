import React from 'react'

import classes from './Filter_square.module.css'

//util
import colours from '../../../../../../util/colours'

export const Filter_square = props => {

    //-config
    const is_active = props.active_filters.find(filter => filter === props.details.name)

    return (

        <div className={classes.container} onClick={props.handle_toggle.bind(this, props.details.name)}>

            {is_active && <div className={classes.animation_container}></div>}

            <img
                src={
                    require(`../../../../../../Assets/Icon/${props.details.icon}.svg`)}
                alt={`${props.details.name} filter icon`}
                className={classes.icon} />

            <span style={{ color: is_active && colours.white, marginTop:"5px", zIndex:"2" }}>{props.details.name}</span>

        </div>

    )

}

export default Filter_square

