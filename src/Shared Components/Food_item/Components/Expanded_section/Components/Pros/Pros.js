import React from 'react'

import classes from './Pros.module.css'

//components
import Tooltip from "../../Components/Tooltip/Tooltip"

//redux hooks
import {useSelector} from "react-redux"

export const Pros = props => {

    const good = useSelector(state => state.colour.good)

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{color:good}}>Good :</span>

            {props.data.map(pro => 
            
            <div key={pro} className={classes.pro}>

                <Tooltip good/>
                
                <span>{pro}</span>

            </div>
            
            )}

        </div>

    )

}

export default Pros