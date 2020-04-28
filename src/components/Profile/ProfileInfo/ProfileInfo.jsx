import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import userPhoto from "../../../assets/images/user.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile){
        return  <Preloader/>
    }
    const onMainPhotoSelected = ({target:{files}}) => {
        if (files.length) {
            savePhoto(files[0]);
        }
    }

    const activateEditMode = () => {
        setEditMode(true);
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => setEditMode(false));
    }

  return (
    <div >
      <div className={s.descriptionBlock}>
          <img
              src={profile.photos.large || userPhoto}
              alt="UserPhoto"
              className={s.avatar}
          />
          {isOwner &&
              <input type={"file"} onChange={onMainPhotoSelected}/>

          }
          {editMode
              ? <ProfileDataForm
                  profile={profile}
                  activateEditMode={activateEditMode}
                  onSubmit={onSubmit}
                  initialValues={profile}
                />
              : <ProfileData
                  profile={profile}
                  isOwner={isOwner}
                  activateEditMode={activateEditMode}
                />
          }

          <ProfileStatusWithHooks status={status} updateStatus = {updateStatus}/>
        </div>
    </div>
  );
};

const ProfileData =({profile, isOwner, activateEditMode}) => {
    return (
        <>
            {isOwner &&
                <div>
                    <button onClick={activateEditMode}>edit</button>
                </div>
            }
            <p>Меня зовут: {profile.fullName}</p>
            <p>В настоящий момент я {profile.lookingForAJob?'ищу работу !!!':'работаю по специальности.'}</p>
            {profile.lookingForAJob&&
            <p>Мои профессиональные навыки: {profile.lookingForAJobDescription}</p>

            }
            <p>About Me: {profile.aboutMe}</p>

            <div>
                Contacts:
                {Object.keys(profile.contacts)
                    .map((contactTitle, key) =>
                        <Contact
                            key={key}
                            contactTitle={contactTitle}
                            contactValue={profile.contacts[contactTitle]}
                        />
                    )}
            </div>
            <br/>
        </>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            {contactTitle}: {contactValue}
        </div>
    );
}
export default ProfileInfo;