import React from 'react'
import Module from '../../../module/Module'
import { ErrorMessage, Form, Formik } from 'formik'
import InputComponent from '../../../input/InputComponent'
import { Button } from '@material-tailwind/react'
import FormControl from '../../../../utils/form-utils/FormControl'
import Checkbox from '../../../../utils/form-utils/Checkbox'

const AddKursForm = ({validationSchema, handleOpen, onSubmit, open, initialValues, title,isPost, type }) => {
    return (
        <Module open={open} handleOpen={handleOpen} title={title}>

            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={isPost ? validationSchema : null} >
                {formik => {
                    return (
                        <Form className='flex flex-col gap-6'>
                            <FormControl control={"input"} label={"Sarlavhasi"} name={"title"} placeholder={"Kurs sarlavhasini kiriting"} />
                            <FormControl control={"file"} accept=".jpg" label={"Kurs Rasmi"} name={"poster_image"} />
                            <div className='flex gap-10'>
                            {
                                type==="kurs" ? <FormControl control={"checkbox"} label={"Sertifikat"} name={"certification"} /> : ""
                            }
                            <FormControl control={"checkbox"} label={"Pullik"} name={"paid"} />
                            </div>
                            {formik.values.paid && <FormControl control={"input"} label={"Kurs narxi"} name={"price"} placeholder={"Kurs sarlavhasini kiriting"} />}
                            <div className='flex justify-end gap-3'>
                                <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                                    <span>Bekor qilish</span>
                                </Button>
                                <button disabled={!formik.isValid || formik.isSubmitting} className='bg px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed' type='submit' variant="gradient" color="green">
                                    <span>Jo'natish</span>
                                </button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Module>
    )
}

export default AddKursForm