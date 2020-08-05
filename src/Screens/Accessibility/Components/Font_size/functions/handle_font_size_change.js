
//redux action creators
import { set_font_scale } from '../../../../../Store/Actions/4_handle_font_scale_action'

const handle_font_size_change = (name, size, dispatch) => {//
        
    window.localStorage.setItem("name", name)//save the new font size name to localstorage (So it can be fetched upon page render to highlight the correct font size option)
    window.localStorage.setItem("size", size)//save the font size to local storage so it can be fetched by redux to scale the app
    dispatch(set_font_scale(name, size))//overwrite the new font scale in redux to update the rest of the app

}

export default handle_font_size_change
