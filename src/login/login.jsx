import React from 'react'
import createReduxForm from "redux-form/lib/createReduxForm";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../components/common/FormControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../components/common/FormControls/FormsContols.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input)}

                {createField("Password", "password", [required], Input, {type: "password"})}

                {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "Remember me")}
            {error &&
                <div className={style.formSummaryError}>
               {error}
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