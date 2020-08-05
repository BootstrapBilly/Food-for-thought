//redux action creators
import { handle_primary_change, handle_contrast_change, handle_good_change, handle_bad_change } from '../../../../../Store/Actions/3_handle_colour_change_action'

//this function is called whenever the user selects a new colour and presses save
//it is used to set the new colour in local storage, and also set it in redux, so the change is reflected across the application

const handle_update_colour = (active_colour_picker, new_colour, dispatch) => {

    window.localStorage.setItem(active_colour_picker, new_colour.hex)//set the new colour in local storage

    //dispatch the relevant action depending on what colour they changed
    if (active_colour_picker === "primary") dispatch(handle_primary_change(new_colour.hex))
    if (active_colour_picker === "contrast") dispatch(handle_contrast_change(new_colour.hex))
    if (active_colour_picker === "good") dispatch(handle_good_change(new_colour.hex))
    if (active_colour_picker === "bad") dispatch(handle_bad_change(new_colour.hex))

}

export default handle_update_colour