import React from 'react'

import classes from './Cons.module.css'

//components
import Tooltip from "../Tooltip/Tooltip"

//redux hooks
import {useSelector} from "react-redux"

export const Cons = props => {

    const bad = useSelector(state => state.colour.bad)

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{color:bad}}>Bad :</span>

            {props.data.map(con =>

                <div key={con} className={classes.con}>

                   <Tooltip bad />
                    <span>{con}</span>

                </div>

            )}

        </div>

    )

}

export default Cons
