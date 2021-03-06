import React from 'react'

import classes from './Pros.module.css'

//components
import Tooltip from "../../Components/Tooltip/Tooltip"

//redux hooks
import {useSelector} from "react-redux"


export const Pros = props => {

    //?selectors
    const font_size = useSelector(state => state.font.size)

    return (

        <div className={classes.container}>

            {props.data.map(pro => 
            
            <div key={pro} className={classes.pro}>

                <Tooltip good/>
                
                <span style={{fontSize:`${font_size * 0.8}px`}}>{pro}</span>

            </div>
            
            )}

        </div>

    )

}

export default Pros