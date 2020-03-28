import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'SET_USER_DATA';
export const UNFOLLOW = 'UNFOLLOW';

 let initialState = {
     userId:null,
     email:null,
     login:null,
     isAuth:false
 }
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
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
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:{userId, email, login, isAuth}
})
export const getAuthUserData = () => (dispatch)=>{
    return authAPI.me()
        .then(response => {
            if (!response.data.resultCode) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))}
        });
}
export const login = (email, password, rememberMe) => (dispatch)=>{
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (!response.data.resultCode) {
                dispatch(getAuthUserData())
            }else{
                const message = response.data.messages.length>0
                    ? response.data.messages[0] : "Some Error!!!"
                dispatch(stopSubmit("login",{_error: message}))
            }
            });
}
export const logout = () => (dispatch)=>{
    authAPI.logout()
        .then(response => {
            if (!response.data.resultCode) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}


