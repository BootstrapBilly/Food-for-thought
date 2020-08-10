const assign_active_icon = (active_icon, props) => {

    if (active_icon === "/food_detail" && props.to === "/" && props.from_food_ideas) return "recommended"

    if (active_icon === "/food_detail" && props.from_favourites) return "favourites"

    if (active_icon !== props.to) return `${props.source}-grey`
    else return props.source

}

export default assign_active_icon
