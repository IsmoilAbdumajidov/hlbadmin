import React from 'react'
import TextError from './TextError'
import { ErrorMessage, Field } from 'formik'
import { useRef } from 'react'

const FileInput = ({ label, name, ...rest }) => {
    const inpRef = useRef()
    return (
        <label htmlFor={name} className='capitalize'>
            <span>{label}</span>
                <Field name={name}>
                    {({ field, form: { setFieldValue } }) => {
                        const { value } = field
                        return <input ref={inpRef}  {...rest} type={"file"} {...field} value={inpRef?.current?.value || ""}  name={name}   onChange={e => setFieldValue(name, e.target.files[0])} />
                    }}
                </Field>
            <ErrorMessage name={name} component={TextError} />
        </label>
    )
}

export default FileInput