import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    };
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 let state = store.getState().messagePage;
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//
//                 return (<Dialogs updateNewMessageBody={onNewMessageChange}
//                                  sendMessage={onSendMessageClick}
//                                  messagePage={state}/>)
//
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }
export default DialogsContainer;