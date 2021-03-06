import React, { useState } from 'react'

//css
import classes from './Accessiblity.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import Option from "./Components/Option/Option"
import ColourScheme from "./Components/Colour_scheme/Colour_scheme"
import FontSize from "./Components/Font_size/Font_size"

export const Accessiblity = () => {

    const [open_options, set_open_options] = useState({//state to determine whether any accessiblity options are expanded

        color: false,//the colour scheme option
        font: false//the font size option
        
    })

    return (

        <div className={classes.container}>

            <TopBar page={"Accessibility"} no_icons />

            <Option icon={"colour_select"} text={"Change colour scheme"} open={open_options.color}
                handle_expand={() => set_open_options({ ...open_options, color: !open_options.color })} />

            {open_options.color && <ColourScheme />}

            <Option icon={"font-size"} text={"Change font size"} open={open_options.font}
                handle_expand={() => set_open_options({ ...open_options, font: !open_options.font })} />

            {open_options.font && <FontSize />}

            <NavBar />

        </div>

    )

}

export default Accessiblity
