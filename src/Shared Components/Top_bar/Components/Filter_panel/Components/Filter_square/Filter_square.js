import React from 'react'

import classes from './Filter_square.module.css'

//redux hooks
import {useSelector} from "react-redux"

export const Filter_square = props => {

    //?selectors
    const primary = useSelector(state => state.colour.primary)
    const contrast = useSelector(state => state.colour.contrast)
    const font_size = useSelector(state => state.font.size)

    //-config
    const is_active = props.active_filters.find(filter => filter === props.details.name)

    return (

        <div className={classes.container} onClick={props.handle_toggle.bind(this, props.details.name)}>

            {is_active && <div className={classes.animation_container} style={{backgroundColor:primary}}></div>}

            <img
                src={
                    require(`../../../../../../Assets/Icon/${props.details.icon}.svg`)}
                alt={`${props.details.name} filter icon`}
                className={classes.icon} />

            <span style={{ color: is_active ? contrast : primary , marginTop:"5px", zIndex:"2", fontSize: `${font_size* 0.8}px`}}>{props.details.name}</span>

        </div>

    )

}

export default Filter_square

