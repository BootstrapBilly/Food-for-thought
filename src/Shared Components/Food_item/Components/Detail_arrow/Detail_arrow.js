import React from 'react'

import classes from './Detail_arrow.module.css'

//redux hooks
import {useSelector} from "react-redux"

export const Detail_arrow = () => {

    const primary = useSelector(state => state.colour.primary)

    return (

        <div className={classes.container}>
            
            <div className={classes.top_line} style={{background:`${primary}b3`}}></div>
            <div className={classes.bottom_line} style={{background:`${primary}b3`}}></div>

        </div>

    )

}


export default Detail_arrow