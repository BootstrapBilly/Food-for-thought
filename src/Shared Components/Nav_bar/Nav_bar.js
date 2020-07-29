import React from 'react'

//css
import classes from './Nav_bar.module.css'

//components
import NavIcon from "./Components/Nav_icon"

//util
import colours from '../../util/colours'

export const Nav_bar = () => {

    return (

        <div className={classes.container} style={{ background: colours.primary }}>

            <NavIcon

                to={"/"}
                text={"Food Ideas"}
                alt={"A navigation icon to leading to the food ideas page"}
                source="recommended"

            />

            <NavIcon

                to={"/favourites"}
                text={"Favourites"}
                alt={"A navigation icon to leading to the Favourites page"}
                source="favourites"

            />

            <NavIcon

                to={"/accessibility"}
                text={"Accessiblity"}
                alt={"A navigation icon to leading to the Accessibility page"}
                source="profile"

            />

        </div>

    )

}

export default Nav_bar