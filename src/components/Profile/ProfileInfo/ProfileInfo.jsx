import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src='https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
        </div>
    </div>
  );
};
export default ProfileInfo;