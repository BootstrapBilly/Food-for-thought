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

                to={"/recommended"}
                text={"Inspire Me"}
                alt={"A navigation icon to lead to the recommended page"}
                source="recommended"

            />

            <NavIcon

                to={"/favourites"}
                text={"Favourites"}
                alt={"A navigation icon to lead to the Favourites page"}
                source="favourites"

            />

            <NavIcon

                to={"/profile"}
                text={"Profile"}
                alt={"A navigation icon to lead to the profile page"}
                source="profile"

            />

        </div>

    )

}

export default Nav_bar