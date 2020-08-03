import React from 'react'

import classes from './Expanded_section.module.css'

//components
import Rating from "./Components/Rating/Rating"
import Portion_toggle from "./Components/Portion_toggle/Portion_toggle"
import Pros from "./Components/Pros/Pros"
import Cons from "./Components/Cons/Cons"
import Source from "./Components/Source/Source"


export const Expanded_section = props => {

    return (

        <div className={classes.container}>

            <Portion_toggle toggle_options={props.data.toggle_options} default_portion={props.data.default_portion} title={props.data.title}/>

            <Rating rating={props.data.rating} />

            <Pros data={props.data.pros} />

            <Cons data={props.data.cons} />

            <Source source={props.data.source} />

            {props.data.additional_source && <Source source={props.data.additional_source} additional_text={"Mercury concerns can be found by tapping here"} />}

        </div>

    )

}

export default Expanded_section
