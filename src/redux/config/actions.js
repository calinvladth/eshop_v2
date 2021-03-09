import axios from 'axios'
import {api} from "../../config";
import {GET_CONFIG} from "./types";

export const GetConfig = () => (dispatch, getState) => {
    axios({
        method: 'GET',
        url: `${api}/config/store/`
    })
        .then(response => dispatch({type: GET_CONFIG, data: response.data}))
        .catch((error) => console.log('Error: ', error))
}