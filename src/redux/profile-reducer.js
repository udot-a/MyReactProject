import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: 'IT kamasutra'
};


export const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state,
    postData:[...state.postData]};
    switch (action.type) {

        case ADD_POST : {
            if (stateCopy.newPostText != '') {
                let newPost = {
                    id: stateCopy.postData[stateCopy.postData.length - 1].id + 1,
                    message: stateCopy.newPostText,
                    likesCounter: 0,
                    picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
                }
                stateCopy.postData.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT : {
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return stateCopy;
    }
    return stateCopy;
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


