import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return  <Preloader/>
    }
  return (
    <div >
      <div>
        <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg' />
      </div>
      <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt="UserPhoto"/>
          <p>Меня зовут: {props.profile.fullName}</p>
          <p>В настоящий момент я {props.profile.lookingForAJob?'ищу работу !!!':'работаю по специальности.'}</p>

        </div>
    </div>
  );
};
export default ProfileInfo;