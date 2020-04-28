import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'SET_USER_DATA';
export const UNFOLLOW = 'UNFOLLOW';
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

 let initialState = {
     userId: null,
     email: null,
     login: null,
     isAuth: false,
     captchaUrl: null
 }
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload
            }
        }
        case GET_CAPTCHA_URL_SUCCESS:{
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
    return state;
}


export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA, payload:{userId, email, login, isAuth, captchaUrl}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}
});

export const getAuthUserData = () => async(dispatch)=>{
    let response = await authAPI.me();
            if (!response.data.resultCode) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const login = (email, password, rememberMe, captcha) => async(dispatch)=>{
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (!response.data.resultCode) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        const message = response.data.messages.length > 0
            ? response.data.messages[0] : "Some Error!!!"
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl  = () => async(dispatch)=>{
    const {data: {url}} = await securityAPI.getCaptchaUrl();

    dispatch(getCaptchaUrlSuccess(url));
};

export const logout = () => (dispatch)=>{
    authAPI.logout()
        .then(response => {
            if (!response.data.resultCode) {
                dispatch(setAuthUserData(null, null, null, false,  null))
            }
        });
}
