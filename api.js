/**Backend API */
export const API_BASE_URL = "https://sarawgeek.com/whywaitfix/public/api/";

export const LOGIN_URL = API_BASE_URL + "login";
export const CHECK_LOGIN_URL = API_BASE_URL + "checklogin";
export const POSTS_URL = API_BASE_URL + "posts";
export const POSTS_STATUS_TOGGLE_URL = API_BASE_URL + "post_status";
export const LOGOUT_URL = API_BASE_URL + "logout";
export const REGISTER_URL = API_BASE_URL + "register";

// const callApi = (URL=API_BASE_URL,METHOD = "GET", HEADERS={ 'Accept': 'application/json', 'Content-Type': 'application/json' },BODY, SUCCESS_CALLBACK,FAILED_CALLBACK) => {
export const callApi = (URL, props = {}) => {

    if (!('method' in props))
        props.method = "GET";
    if (!('headers' in props))
        props.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

    console.log(URL, props);
    if (!('success_callback' in props)) {
        props.success_callback = (result) => {
            console.log("SUCCESS\n", result);
        };
    }
    if (!('failed_callback' in props)) {
        props.failed_callback = (result) => {
            console.log("FAILED\n", result);
        };
    }

    fetch(URL, {
        method: props.method,
        headers: props.headers,
        body: JSON.stringify(props.body),
    }).then((response) => response.json()).then((json) => {
        console.log("SUCCESS\n", json);
        props.success_callback(json);
    }).catch((error) => {
        console.log("FAILED\n", error);
        props.failed_callback(error);
    });
}


/**Paypal Api */


export const PAYPAL = {
    TEST={
        url="",
        clientId="AdAgu97jlo-fwzSs_KaeI8zAHDOVuMzA_37udqlGNS-xWxl7WJySkos-PJTRvN0AX_hmP8957YwQOfgM",
        secret="EGcKLzXWnTWwXqViXVUKl1x1V_zox7HjLD-75tUUWzq5gOPvfw2zfCdgbpFjEz33NrsV7sCmvT9Km10L",
    },
    LIVE={
        url="",
        clientId="AdAgu97jlo-fwzSs_KaeI8zAHDOVuMzA_37udqlGNS-xWxl7WJySkos-PJTRvN0AX_hmP8957YwQOfgM",
        secret="EGcKLzXWnTWwXqViXVUKl1x1V_zox7HjLD-75tUUWzq5gOPvfw2zfCdgbpFjEz33NrsV7sCmvT9Km10L",
    }
}
