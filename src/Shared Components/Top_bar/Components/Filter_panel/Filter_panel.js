import React from 'react'

import classes from './Filter_panel.module.css'

//util
import colours from '../../../../util/colours'

//external
import { useSwipeable } from 'react-swipeable'

export const Filter_panel = props => {

    //-config
    const handlers = useSwipeable({//swipeable handler config from - https://github.com/FormidableLabs/react-swipeable

        onSwipedLeft: props.handle_close,//on left swipe, call the prop parent function and close the menu
        preventDefaultTouchmoveEvent: true,
        trackMouse: true

    })//initialise the swiping library

    return (

        <div {...handlers} className={[classes.container, props.open && classes.container_open].join(" ")} style={{ background: colours.white }}>

            Filter_panel

            <div className={classes.collapsible_area} style={{display:props.open ? "block" : "none"}} onClick={props.handle_close}></div>
            

        </div>

    )

}

export default Filter_panel
