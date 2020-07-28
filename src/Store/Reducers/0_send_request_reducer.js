import {API_RESPONSE, CLEAR_RESPONSE} from "../Actions/0_send_request_action"

const initialState = {//set the initial state

    response: null

}

const send_request = (state = initialState, action) => {

    switch (action.type) {

        case API_RESPONSE:

        return {...state, response:action.payload}
        
        case CLEAR_RESPONSE:

        return {...state, response:null}

        default:

            return state;
    }

}

export default send_request
