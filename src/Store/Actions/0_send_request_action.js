import send_request_axios from "../../util/send_request_axios"

export const API_RESPONSE = "API_RESPONSE";
export const CLEAR_RESPONSE = "CLEAR_RESPONSE";

export const send_request = (data, url, type) => {

    let request;

    if(type) {request = send_request_axios(url, data, type)}

    else request = send_request_axios(url, data) 

    return async dispatch => {

        try {

            const response = await request     

             //console.log(response)
            if (response.data) return dispatch({ type: API_RESPONSE, payload: response })

        }

        catch (error) {

            return dispatch({ type: API_RESPONSE, payload: error.response})

        }

    }

}

export const clear_response = () => async dispatch => dispatch({ type: CLEAR_RESPONSE})


