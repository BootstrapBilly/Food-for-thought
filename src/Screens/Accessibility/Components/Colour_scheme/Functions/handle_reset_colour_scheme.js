//redux action creators
import { reset_colour_scheme } from '../../../../../Store/Actions/3_handle_colour_change_action'

//this function is called when the user presses the reset colour scheme button
//it removes all of the colours from local storage, then clears them from redux, which then applies the default colour scheme

const handle_reset = (dispatch) => {

    //it removes all of the colours from local storage 
    window.localStorage.removeItem("primary")
    window.localStorage.removeItem("contrast")
    window.localStorage.removeItem("good")
    window.localStorage.removeItem("bad")

    dispatch(reset_colour_scheme())//then resets the colours in redux (which have default options if they are null)

}

export default handle_reset