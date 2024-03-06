import React from 'react'
import TextError from './TextError'
import { ErrorMessage, FastField, Field } from 'formik'

const Select = ({ label, name, options, ...rest }) => {
    return (
        <label htmlFor='name' className='capitalize'>
            <span lassName='font-semibold'>{label || ""}</span>
            <Field as="select" name={name} {...rest}>
                {options.map((option, index) => (
                    <option key={index} value={option.value} className="text-black">{option.key || ""}</option>
                ))}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </label>
    )
}

export default Select