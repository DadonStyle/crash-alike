import axios from "axios";
import { store } from '../../redux/store'

const JwtAxios = axios.create();

JwtAxios.interceptors.request.use(request => {
    request.headers = {
        "Authorization": `Bearer ${store.getState().connectionReducer.jwtToken}` // make sure this code is relevant as we use WS and not axios
    }
    return request;
});

JwtAxios.interceptors.response.use(response => {
    // //console.log("jwt: "+ response.headers.authorization);
    // myStore().store.dispatch(loginAction(response.headers.authorization));
    // return response;
});

export default JwtAxios;