import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
    return state;
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}})
export const getAuthUserData = () => (dispatch)=>{
    authAPI.me()
        .then(response => {
            if (!response.data.resultCode) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))}
        });
}


