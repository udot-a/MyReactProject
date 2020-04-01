import React from 'react'
import styles from './FormsContols.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


export const FormControl = ({input, meta,child, ...props}) => {
    const hasError = meta.touched&&meta.error
    return(
        <div className={styles.formControl+' '+ (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError&&<span>{meta.error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    let {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
};
export const Input = (props) => {
 const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>

};

export const createField = (placeholder, name, validators, component, props={}, text="") => {
    return (
        <div>
            <Field placeholder={placeholder}
                   component={component}
                   name={name}
                   validate={validators}
                   {...props}
            /> {text}
        </div>
    )
}