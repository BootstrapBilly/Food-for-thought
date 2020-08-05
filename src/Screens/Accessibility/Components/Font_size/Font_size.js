import React, { useState, useEffect } from 'react'

import classes from './Font_size.module.css'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//util
import capitalizeFirstChar from '../../../../util/capitalise_first'

//functions
import handle_font_size_change from "./functions/handle_font_size_change"

export const Font_size = () => {

    //-config
    const dispatch = useDispatch()//initialise the usedispatch hook

    //?selectors
    const font_size = useSelector(state => state.font.size)//grab the current font size from redux
    const font_size_name = useSelector(state => state.font.name)//grab the current font size name (used to highlight the currently selected one )
    const primary = useSelector(state => state.colour.primary)//grab the primary colour from redux
    const contrast = useSelector(state => state.colour.contrast)//grab the secondary colour from redux

    //*states
    const [active_font_size, set_active_font_size] = useState(font_size_name)//sets the highlighted (active_font_size) font size

    //!effects
    //this is used to change the highlighted font size when a new one has been selected by setting the active font size state to the one which was selected
    useEffect(() => set_active_font_size(font_size_name), [font_size_name])

    return (

        <div className={classes.container}>

            <span className={classes.title} style={{ fontSize: `${font_size * 1.15}px` }}>Select a font size :</span>

            {[
                { name: "small", value: "14" },
                { name: "medium", value: "17" },
                { name: "large", value: "20" },
                { name: "very_large", value: "24" }
            ]

                .map((font_size, index) =>

                    <span

                        className={[classes[font_size.name], classes.link].join(" ")}
                        key={index}

                        style={{
                            background: active_font_size === font_size.name && primary,
                            color: active_font_size === font_size.name && contrast
                        }}
                        
                        onClick={() => handle_font_size_change(font_size.name, font_size.value, dispatch)}

                    >

                        {capitalizeFirstChar(font_size.name === "very_large" ? "very large" : font_size.name)}

                    </span>

                )}

        </div>

    )

}

export default Font_size
