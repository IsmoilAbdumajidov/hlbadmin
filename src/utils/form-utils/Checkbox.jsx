import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const Checkbox = ({ label, name, ...rest }) => {
    return (
        <div>
            <Field name={name} id={name}>
                {({ field, form: { setFieldValue } }) => {
                    const { value } = field
                    return(
                        <label htmlFor={name} className="flex flex-row gap-2 items-center capitalize">
                            <span>{label}</span>
                            <input  {...rest} type={"checkbox"} {...field} className='w-auto' name={name} checked={value} onChange={e => setFieldValue(name, e.target.checked)} />
                        </label>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Checkbox