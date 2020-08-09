import React from 'react'

import classes from './Cons.module.css'

//components
import Tooltip from "../Tooltip/Tooltip"

//redux hooks
import {useSelector} from "react-redux"

export const Cons = props => {

    //?selectors
    const bad = useSelector(state => state.colour.bad)
    const font_size = useSelector(state => state.font.size)

    return (

        <div className={classes.container}>

            {props.data.map(con =>

                <div key={con} className={classes.con}>

                   <Tooltip bad />
                    <span style={{fontSize:`${font_size * 0.8}px`}}>{con}</span>

                </div>

            )}

        </div>

    )

}

export default Cons
