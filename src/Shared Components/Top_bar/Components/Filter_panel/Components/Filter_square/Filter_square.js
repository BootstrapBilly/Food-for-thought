import React from 'react'

import classes from './Filter_square.module.css'

//util
import colours from '../../../../../../util/colours'

export const Filter_square = props => {

    //-config
    const is_active = props.active_filters.find(filter => filter === props.details.name)

    return (

        <div className={classes.container} style={{ background: is_active && colours.primary }} onClick={props.handle_toggle.bind(this, props.details.name)}>

            <img
                src={
                    require(`../../../../../../Assets/Icon/${props.details.icon}.svg`)}
                alt={`${props.details.name} filter icon`}
                className={classes.icon} />

            <span style={{ color: is_active && colours.white, marginTop:"5px" }}>{props.details.name}</span>

        </div>

    )

}

export default Filter_square

