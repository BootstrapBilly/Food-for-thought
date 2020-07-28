import React from 'react'

import classes from './Cons.module.css'

import minus from "../../../../../../Assets/Icon/minus.svg"

export const Cons = props => {

    return (

        <div className={classes.container}>

            <span className={classes.title}>Bad :</span>

            {props.data.map(con =>

                <div key={con} className={classes.con}>

                    <img src={minus} alt="A minus icon" className={classes.minus} />
                    <span>{con}</span>

                </div>

            )}

        </div>

    )

}

export default Cons
