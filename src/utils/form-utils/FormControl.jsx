import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import DatePicker from './DatePicker'
import Password from './Password'
import FileInput from './FileInput'
import CheckboxGroup from './CheckboxGroup'
import Checkbox from './Checkbox'

const FormControl = ({ control, ...rest }) => {
    // input
    if (control === "input") return <Input {...rest} />

    // textarea
    if (control === "textarea") return <TextArea {...rest} />

    // select
    if (control === "select") return <Select {...rest} />

    // radio
    if (control === "radio") return <RadioButtons {...rest} />

    // checkbox
    if (control === "checkbox") return <Checkbox {...rest} />

    // checkbox group
    if (control === "checkboxGroup") return <CheckboxGroup {...rest} />

    // date
    if (control === "date") return <DatePicker {...rest} />

    // passowrd
    if (control === "password") return <Password {...rest} />

    // file
    if (control === "file") return <FileInput {...rest} />
}

export default FormControl