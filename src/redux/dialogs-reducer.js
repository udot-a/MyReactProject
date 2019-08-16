import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profile-reducer";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dron', picture: 'http://avatars.co.ua/web/wallpapers/avatarka-92776/thumbnail/lg.gif'},
        {id: 2, name: 'Petr', picture: 'http://avatars.co.ua/web/wallpapers/avatarka-92898/thumbnail/lg.jpg'},
        {
            id: 3,
            name: 'Nikolaich',
            picture: 'http://avatars.co.ua/web/wallpapers/avatarka-zhivotnye-49766/thumbnail/lg.jpg'
        },
        {
            id: 4,
            name: 'Vasiliy',
            picture: 'http://avatars.co.ua/web/wallpapers/avatarki-angely-9923/thumbnail/lg.gif'
        },
        {
            id: 5,
            name: 'Ibragim',
            picture: 'http://avatars.co.ua/web/wallpapers/3d-avatarka-99759/thumbnail/lg.gif'
        },
        {
            id: 6,
            name: 'Michail',
            picture: 'http://avatars.co.ua/web/wallpapers/avatarki-animaciya-38172/thumbnail/lg.gif'
        }],
    messagesData: [
        {id: 1, message: 'Hello! How are you doing?'},
        {id: 2, message: 'Whats soup dock?'},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'Life is piece of shirt!!!'},
        {id: 5, message: 'Remember me?'},
        {id: 6, message: 'Just do it!!!'}],
    newMessageBody: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :{
            state.newMessageBody = action.body;
            return state;
        }
        case SEND_MESSAGE :{
            let body = state.newMessageBody
            state.newMessageBody = '';
            let newMessage = {id: state.messagesData[state.messagesData.length - 1].id + 1,
                message: body};
            state.messagesData.push(newMessage)
            return state;
        }
            default: return state;
    }
    return  state;
}

export const  sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text)=>({type: UPDATE_NEW_MESSAGE_BODY, body: text})


