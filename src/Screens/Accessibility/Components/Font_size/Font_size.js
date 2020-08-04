import React, { useState, useEffect } from 'react'

import classes from './Font_size.module.css'

//redux action creators
import { set_font_scale } from '../../../../Store/Actions/4_handle_font_scale_action'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//util
import capitalizeFirstChar from '../../../../util/capitalise_first'

export const Font_size = () => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux
    const font_size_name = useSelector(state => state.font.name)//grab the current font size name (used to highlight the currently selected one )
    const primary = useSelector(state => state.colour.primary)//grab the primary colour from redux
    const contrast = useSelector(state => state.colour.contrast)//grab the secondary colour from redux

    //*states
    const [active, set_active] = useState(font_size_name)//sets the highlighted (active) font size

    //!effects
    //this effect is used to change the highlighted font size when a new one has been selected
    useEffect(()=> {set_active(font_size_name)},[font_size_name])

    const handle_font_size_change = (name, size) => {
        
        window.localStorage.setItem("name", name)//save the new font size name to localstorage (So it can be fetched upon page render to highlight the correct font size option)
        window.localStorage.setItem("size", size)//save the font size to local storage so it can be fetched by redux to scale the app

        dispatch(set_font_scale(name, size))//overwrite the new font scale in redux to update the rest of the app

    }

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ fontSize: `${font_size * 1.15}px` }}>Select a font size :</span>

            {[
                ["small", "14"],
                ["medium", "17"],
                ["large", "20"],
                ["very_large", "24"]
            ]
            
            .map(size =>

                    <span className={[classes[size[0]], classes.link].join(" ")}
                        style={{ background: active === size[0] && primary, color: active === size[0] && contrast }}
                        onClick={() => handle_font_size_change(size[0], size[1])}
                    >

                        {capitalizeFirstChar(size[0] === "very_large" ? "very large" : size[0])}

                    </span>

                )}

        </div>

    )

}

export default Font_size
