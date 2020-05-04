import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.picture} alt={"Post"}/>
      {props.message}
      <div>
        <span>{props.LikeCounter} Like</span>
      </div>
    </div>
  );
};
export default Post;