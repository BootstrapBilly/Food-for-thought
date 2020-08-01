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
    const dispatch = useDispatch()

    //?selectors
    const font_size = useSelector(state => state.font.size)
    const font_size_name = useSelector(state => state.font.name)
    const primary = useSelector(state => state.colour.primary)
    const contrast = useSelector(state => state.colour.contrast)

    //*states
    const [active, set_active] = useState(font_size_name)

    //!effects
    useEffect(()=> {

        set_active(font_size_name)

    },[font_size_name])

    const handle_font_size_change = (name, size) => {
        
        window.localStorage.setItem("name", name)
        window.localStorage.setItem("size", size)
        dispatch(set_font_scale(name, size))


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
