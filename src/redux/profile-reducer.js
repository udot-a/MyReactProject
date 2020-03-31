import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";
import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = 'ADD-POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';
export const SET_STATUS = 'SET-STATUS';



let initialState = {
    postData: [
        {
            id: 1,
            message: 'How are you?',
            likesCounter: 5,
            picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
        },
        {
            id: 2,
            message: 'It is my life.',
            likesCounter: 12,
            picture: 'https://klike.net/uploads/posts/2019-06/medium/1560059237_3.jpg'
        },
        {
            id: 3,
            message: 'Very cool!!!',
            likesCounter: 23,
            picture: 'https://klike.net/uploads/posts/2019-06/1560059217_6.jpg'
        },
        {
            id: 4,
            message: 'In god we trust!!!',
            likesCounter: 35,
            picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
        }],
    profile:null,
    status:''
};


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST : {
                return {
                    ...state,
                    postData: [...state.postData, {
                        id: state.postData[state.postData.length - 1].id + 1,
                        message: action.newPostText,
                        likesCounter: 0,
                        picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
                    }]
                }
        }
        case DELETE_POST : {
                return {
                    ...state,
                    postData: state.postData.filter(p => p.id != action.postId)
                }
        }
        case SET_USER_PROFILE : {
            return {...state,
                profile : action.profile
            }
        }
        case SET_STATUS : {
            return {...state,
                status : action.status
            }
        }
        default:
            return state;
    }
    return state;
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) =>(dispatch)=> {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) =>async dispatch=> {
   let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) =>async dispatch=> {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode ===0){
                dispatch(setStatus(status));
            }
}


