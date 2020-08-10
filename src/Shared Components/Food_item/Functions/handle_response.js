const handle_response = (response, set_calorie_multiplier, props) => {

    //if the portion data was fetched upon render, set the kcal multiplier
    if (response && response.data.message === "Portion size data retrieved" && response.data.details.title.toLowerCase() === props.data.title.toLowerCase()) {

        set_calorie_multiplier(response.data.details.multiplier)

    }

    //if the portion size was updated, set the kcal multiplier
    if (response && response.data.message === "portion preferences saved" && response.data.details.title.toLowerCase() === props.data.title.toLowerCase()) {

        set_calorie_multiplier(response.data.details.multiplier)

    }

}

export default handle_response