import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

const maxLength30 = maxLengthCreator(30)
const minLength10 = minLengthCreator(10)

class MyPosts extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !=this.props || nextState !=this.state;
    }
    render() {
        let count = 0
        let postsElements =
            this.props.posts.map(p => (
                <Post key={count++} message={p.message} picture={p.picture} LikeCounter={p.likesCounter}/>));

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
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
    }
}

let AddNewPostForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText'
                       validate={[required, maxLength30, minLength10]} />
            </div>
            <div>
                <button >New Post</button>
            </div>
        </form>

    )
}
AddNewPostForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;