import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state: {
        messagePage: {
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
        },
        profilePage: {
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
        },
        sidebar: {}
    },
    _callSubcriber() {
        console.log('state changed')
    },
    subscribe(observer) {

        this._callSubcriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubcriber();
    }
}
export default store;
window.store = store;