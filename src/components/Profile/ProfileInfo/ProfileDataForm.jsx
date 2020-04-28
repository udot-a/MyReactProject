import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';


const ProfileDataForm =({profile, activateEditMode, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={activateEditMode}>save</button>
            </div>
            {error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>

            }
            <div>
                {"Full name:"}
                {createField("Type your full name...", "fullName", null, Input)}
            </div>

            <div>
                {"Looking for a job:"}
                {createField("", "lookingForAJob", null, Input, {type: "checkbox"})}

            </div>

            <div>
                {"Professional skills:"}
                {createField(
                    "Type your professional skils...",
                    "lookingForAJobDescription",
                    null,
                    Textarea,
                    {rows: 5}
                )}
            </div>

            <div>
                {"About Me:"}
                {createField(
                    "Type information about you...",
                    "aboutMe",
                    null,
                    Textarea,
                    {rows: 7}
                )}
            </div>

            <div>
                Contacts:
                {Object.keys(profile.contacts)
                    .map((contactTitle, key) =>(
                        <div
                            key={key}
                            className={s.contact}
                        >
                            {contactTitle}
                            {":"}
                            {createField(
                                contactTitle + "...",
                                "contacts." + contactTitle,
                                null,
                                Input)}
                        </div>
                        )
                    )
                }
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
export default ProfileDataFormReduxForm;
