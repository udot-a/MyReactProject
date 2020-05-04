
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
        {id: 6, message: 'Just do it!!!'}]
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: state.messagesData[state.messagesData.length - 1].id + 1,
                    message: body
                }]
            }
        }
        default:
            return state;
    }
    return state;
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



