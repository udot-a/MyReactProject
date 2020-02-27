import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let count = 0
    let postsElements =
        props.posts.map(p => (<Post key = {count++} message={p.message} picture={p.picture} LikeCounter={p.likesCounter}/>));

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        // props.dispatch(addPostActionCreator());
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.posts}>
                {postsElements}
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
        </div>
    );
};
let AddNewPostForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText'/>
            </div>
            <div>
                <button >New Post</button>
            </div>
        </form>

    )
}
AddNewPostForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;