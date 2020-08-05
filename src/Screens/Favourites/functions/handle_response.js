//redux action creators
import {send_request} from "../../../Store/Actions/0_send_request_action"

const handle_response = (response, dispatch, set_favourites, set_favourites_copy, filters, search_string) => {

    if (response && response.data.message === "Removed from favourites") {//if a favourite has been removed 

        return dispatch(send_request({}, "get_favourites", "get"))//fetch them again to display favourites without the removed one

    }

    //if favourites have been retrieved and there are no active filters or search string
    if (response && response.data.message === "Favourites retrieved" && !filters.length && !search_string) {

        set_favourites_copy(response.data.favourites)//set the copy of favourites so that the handle filters function can reset the favourites to all of them which where received on the response if there are no filters or search string active
        return set_favourites(response.data.favourites)//set the state of favourites to the ones retreived from the database

    }

}

export default handle_response