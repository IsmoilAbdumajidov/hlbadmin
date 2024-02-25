import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const RadioButtons = ({ label, name, options, ...rest }) => {
    return (
        <label className='capitalize'>
            <span >{label}</span>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map((option, index) => (
                        <label key={index} className="flex flex-row gap-2 items-center">
                            <input type="radio" {...field} value={option.value} checked={field.value === option.value} />
                            <span>{option.key}</span>
                        </label>
                    ))
                }}
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </label>
    )
}

export default RadioButtons