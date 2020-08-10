import {clear_filters} from "../../../../Store/Actions/1_handle_filters_action"
import {clear_search_string} from "../../../../Store/Actions/2_handle_search_action"

const handle_redirect = (set_show_animation, dispatch, set_redirect, props) => {

    set_show_animation(true)//set the show animation state to true, so the icon will bounce when selected

    setTimeout(() => {//dont redirect until after 0.3s, so the icon can do its animation

        dispatch(clear_filters())//clear any active filters before navigating
        dispatch(clear_search_string())//clear the search string before navigating
        set_redirect(props.to)//redirect them to their desired page
        window.scrollTo(0, 0)
        return set_show_animation(false)

    }, 150);
}

export default handle_redirect