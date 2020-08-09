import React from 'react'

//css
import classes from './Food_item.module.css'

//components
import VisibleSection from "./Components/Visible_section/Visible_section"

export const Food_item = props => {


    return (

        <div className={classes.container}>

            <VisibleSection data={props.data} />

        </div>

    )

}

export default Food_item
