import React from 'react'
import createReduxForm from "redux-form/lib/createReduxForm";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../components/common/FormControls/FormsContols.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} component={Input} name={'email'}
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'} type={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/>Remember me
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
               {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {

   const onSubmit =(formData)=>{
       const {
           email,
           password,
           rememberMe
       } = formData;

       const {login} = props

       login(email, password, rememberMe)
    }
    if (props.isAuth) {
        return (
            <Redirect to={"/profile"}/>
        )
    }else {
        return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    }
}
export default connect(state => ({isAuth: state.auth.isAuth}), {login})(Login)