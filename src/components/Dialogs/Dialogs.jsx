import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.messagePage;

    let dialogsElements =
        state.dialogsData.map(dialog => (
            <DialogItem name={dialog.name} id={dialog.id} picture={dialog.picture}/>));

    let messagesElements =
        state.messagesData.map(el => (<Message message={el.message}/>));

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();
    }
    let onNewMessageChange = (event) =>{
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message...' value={newMessageBody} onChange={onNewMessageChange}>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;