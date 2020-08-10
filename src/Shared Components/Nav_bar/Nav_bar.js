import React from 'react'

//css
import classes from './Nav_bar.module.css'

//components
import NavIcon from "./Components/Nav_icon"

//redux hooks
import {useSelector} from "react-redux"

export const Nav_bar = props => {

    const primary = useSelector(state => state.colour.primary)

    return (

        <div className={classes.container} style={{background:primary }}>

            <NavIcon

                to={"/"}
                text={"Food Ideas"}
                alt={"A navigation icon to leading to the food ideas page"}
                source="recommended"
                from_food_ideas={props.from_food_ideas}


            />

            <NavIcon

                to={"/favourites"}
                text={"Favourites"}
                alt={"A navigation icon to leading to the Favourites page"}
                source="favourites"
                from_favourites={props.from_favourites}

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