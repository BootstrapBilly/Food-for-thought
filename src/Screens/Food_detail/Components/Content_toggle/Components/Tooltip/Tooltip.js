import React from 'react'

//css
import classes from './Tooltip.module.css'

//redux hooks
import {useSelector} from "react-redux"

export const Tooltip = props => {

    const good = useSelector(state => state.colour.good)
    const bad = useSelector(state => state.colour.bad)
    const contrast = useSelector(state => state.colour.contrast)

    return (

        <div className={classes.container} style={{backgroundColor:props.good ? good : bad}}>

            <div className={classes.verticle_line} style={{backgroundColor:contrast, display:props.bad && "none"}}></div>
            <div className={classes.horizontal_line} style={{backgroundColor:contrast}}></div>
            
        </div>

    )

}

export default Tooltip