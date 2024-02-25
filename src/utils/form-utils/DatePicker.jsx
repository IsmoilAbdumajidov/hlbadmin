import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const DatePicker = ({ label, name, ...rest }) => {
    return (
        <label className='capitalize'>
            <span >{label}</span>
            <Field name={name} {...rest}>
                {({ form: { setFieldValue }, field }) => {
                    const { value } = field
                    return <input type="date" {...field} {...rest} value={value} onChange={e => setFieldValue(name, e.target.value)} />
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </label>
    )
}

export default DatePicker