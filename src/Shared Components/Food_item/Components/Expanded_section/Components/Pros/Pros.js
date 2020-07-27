import React from 'react'

import classes from './Pros.module.css'

import plus from "../../../../../../Assets/Icon/plus.svg"

export const Pros = props => {

    return (

        <div className={classes.container}>

            <span className={classes.title}>Good :</span>

            {props.data.map(pro => 
            
            <div key={pro} className={classes.pro}>

                <img src={plus} alt="A plus icon" className={classes.plus}/>
                <span>{pro}</span>

            </div>
            
            )}

        </div>

    )

}

export default Pros