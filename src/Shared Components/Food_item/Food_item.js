import React, { useState, useEffect } from 'react'

import classes from './Food_item.module.css'

//util 
import Capitalise from "../../util/capitalise_first"

//components
import DetailArrow from "./Components/Detail_arrow/Detail_arrow"
import Thumbnail from "./Components/Thumbnail/Thumbnail"
import Rating from "./Components/Rating/Rating"

//redux hooks
import { useSelector, useDispatch } from "react-redux"
import { send_request } from '../../Store/Actions/0_send_request_action'

//functions
import handle_response from "./Functions/handle_response"

//external
import { Link } from "react-router-dom"

export const Visible_section = props => {

    //-config
    const dispatch = useDispatch()//intiialise the usedispatch hook

    //?selectors
    const primary = useSelector(state => state.colour.primary)//grab the primary colour from redux
    const font_size = useSelector(state => state.font.size)//grab the font size from redux
    const response = useSelector(state => state.request.response)//grab the response from redux

    //*states
    const [calorie_multiplier, set_calorie_multiplier] = useState(1)

    //!effects
    //every time the component is rendered, fetch the selected portion size from the backend
    // eslint-disable-next-line
    useEffect(() => { dispatch(send_request({ title: props.data.title.toLowerCase() }, "get_portion_size")) }, [props.data.title])

    //this effect calls the helper function to handle the response whenever  the component is rendered, or the portion size is changed
    // eslint-disable-next-line
    useEffect(() => { handle_response(response, set_calorie_multiplier, props) }, [response])

    return (

        <div className={classes.container} onClick={props.onClick}>

            <Thumbnail src={props.data.thumbnail} alt={props.data.title} data={props.data} />

            <Link to={{ pathname: "/food_detail", state: { data: props.data, favourites: props.favourites && true, food_ideas: props.food_ideas && true } }} style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>

                <div className={classes.text_section}>

                    <span className={classes.title} style={{ color: primary, fontSize: `${font_size * 1.1}px` }}> {Capitalise(props.data.title)} </span>

                    <span className={classes.kcals} style={{ fontSize: `${font_size * 0.85}px` }}> {`Kcals : ${props.data.kcals * calorie_multiplier}`} </span>

                    <Rating rating={props.data.rating} />

                </div>

                <DetailArrow />

            </Link>

        </div>

    )

}

export default Visible_section
