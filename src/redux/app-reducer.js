import {getAuthUserData} from "./auth-reducer";

export const SET_INITIALIZED = 'SET_INITIALIZED';

 let initialState = {
     initialized:false
 }
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:{
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
    return state;
}
export const initializedSuccess = () => ({
    type: SET_INITIALIZED
})
export const initializeApp = () => async(dispatch)=>{
    await dispatch(getAuthUserData());
    await dispatch(initializedSuccess());
}
