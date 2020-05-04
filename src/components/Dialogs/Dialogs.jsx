import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30)
const minLength10 = minLengthCreator(10)

const Dialogs = (props) => {
    let state = props.messagePage;

    let dialogsElements =
        state.dialogsData.map(dialog => (
            <DialogItem name={dialog.name} id={dialog.id} picture={dialog.picture} key={dialog.id}/>));

    let messagesElements =
        state.messagesData.map(el => (<Message message={el.message} key={el.id}/>));

    const addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message...'
                       validate={[required, maxLength30, minLength10]}/>
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>

    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;

