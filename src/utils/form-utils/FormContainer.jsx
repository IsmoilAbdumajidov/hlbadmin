import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import FormControl from './FormControl'
const FormContainer = () => {
    // select options
    const selectOptions = [
        { key: "Select an option", value: "" },
        { key: "Option 1", value: "option1" },
        { key: "Option 2", value: "option2" },
        { key: "Option 3", value: "option3" },
    ]
    // radio options
    const radioOptions = [
        { key: "Option 1", value: "rOption1" },
        { key: "Option 2", value: "rOption2" },
        { key: "Option 3", value: "rOption3" },
    ]
    // checkbox options
    const checkboxOptions = [
        { key: "Option 1", value: "cOption1" },
        { key: "Option 2", value: "cOption2" },
        { key: "Option 3", value: "cOption3" },
    ]
    // initial values
    const initialValues = {
        email: "",
        description: "",
        selectValue: "",
        radioValue: "",
        checkboxOption: "",
        birthDate: "",
    }
    // validation
    // 2xil usulda validate qilsak boladi birinchisi yup orqali ikkinchisi validate funksiyai orqali
    const validate = (values) => {
        let error = {}
        // email
        if (!values.email) {
            error.email = "Ma'lumot kiritilmadi"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(values.email)) {
            error.email = "Invalid email format"
        }

        // textarea
        if (!values.description) {
            error.description = "Ma'lumot kiritilmadi"
        }

        // select
        if (!values.selectValue) {
            error.selectValue = "Ma'lumot kiritilmadi"
        }

        // radio
        if (!values.radioValue) {
            error.radioValue = "Ma'lumot kiritilmadi"
        }

        // checkbox
        if (!values.checkboxOption.length) {
            error.checkboxOption = "Ma'lumot kiritilmadi"
        }

        return error
    }
    // validation with Yup
    const validationSchema = Yup.object({
        email: Yup.string().required("Ma'lumot kiritilmadi*"),
        description: Yup.string().required("Ma'lumot kiritilmadi*"),
        selectValue: Yup.string().required("Ma'lumot kiritilmadi*"),
        radioValue: Yup.string().required("Ma'lumot kiritilmadi*"),
        checkboxOption: Yup.array().required("Ma'lumot kiritilmadi*").min(1, "Ma'lumot kiritilmadi*"),
        birthDate: Yup.date().required("Ma'lumot kiritilmadi*").nullable(),
    })
    // onsubmit fucntion
    const onSubmit = (values, onSubmitProps) => {
        console.log("Form data", values)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }

    return (
        // <Formik  initialValues={initialValues}  validate={validate} onSubmit={onSubmit} >
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >
            {
                formik => (
                    <Form className='flex mx-auto flex-col sm:w-[600px] p-4 rounded-lg shadow-lg shadow-sky-200 gap-3 m-4'>
                        <FormControl control={"input"} type="email" label="Email" name="email" className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"select"} options={selectOptions} label="Select" name="selectValue" className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"radio"} options={radioOptions} label="Radio buttons" name="radioValue" className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"checkbox"} options={checkboxOptions} label="Checkbox topics" name="checkboxOption" className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"date"} options={checkboxOptions} label="Pick a date" name="birthDate" className="border outline-none p-2 rounded w-full" />
                        <FormControl control={"textarea"} type="textarea" label="Description" name="description" className="border outline-none p-2 rounded w-full" />
                        <button disabled={!formik.isValid || formik.isSubmitting} className='bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 text-center rounded' type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormContainer