import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Input = ({ label, name, ...rest }) => {
    return (
        <label htmlFor={name} className='capitalize'>
            <span >{label || ""}</span>
            <Field id={name}  name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </label>
    )
}

export default Input