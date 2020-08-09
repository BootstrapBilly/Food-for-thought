import React from 'react'

//css
import classes from './Food_detail.module.css'

//components
import NavBar from "../../Shared Components/Nav_bar/Nav_bar"
import TopBar from "../../Shared Components/Top_bar/Top_bar"
import BackButton from "../../Shared Components/Back button/Back_button"
import ContentToggle from "./Components/Content_toggle/Content_toggle"

//external
import { withRouter } from 'react-router-dom'

export const Food_detail = (props) => {

    //-config
    const data = props.location.state.data //extract the data passed when redirected from the food item preview

    console.log(data)

    return (

        <div className={classes.container}>

            <BackButton onClick={() => props.history.goBack()} />

            <div className={classes.image_container}>

                <div className={classes.underlay_one}></div>

                <div className={classes.underlay_two}></div>

                <img src={require(`../../Assets/Food_images/${data.image}.jpg`)} alt={props.title} className={classes.image}/>

            </div>

            <ContentToggle data={data} />

            <TopBar page={data.title} />

            <NavBar />

        </div>


    )

}

export default withRouter(Food_detail)
