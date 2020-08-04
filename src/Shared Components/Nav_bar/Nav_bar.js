import React from 'react'

//css
import classes from './Nav_bar.module.css'

//components
import NavIcon from "./Components/Nav_icon"

export const Nav_bar = () => {

    return (

        <div className={classes.container}>

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
                source="accessibility"

            />

        </div>

    )

}

export default Nav_bar