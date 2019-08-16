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
    switch (action.type) {
        case ADD_POST : {
            if (state.newPostText != '') {
                let newPost = {
                    id: state.postData[state.postData.length - 1].id + 1,
                    message: state.newPostText,
                    likesCounter: 0,
                    picture: 'https://klike.net/uploads/posts/2019-06/1560059165_1.jpg'
                }
                state.postData.push(newPost);
                state.newPostText = '';
            }
            return state;
        }
        case UPDATE_NEW_POST_TEXT : {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
    return state;
}
export const  addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text)=>({type: UPDATE_NEW_POST_TEXT, newText: text})


