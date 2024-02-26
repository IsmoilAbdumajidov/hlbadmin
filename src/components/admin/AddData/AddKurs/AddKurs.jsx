import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import AddKursForm from './AddKursForm';
import AccordionAdmin from '../../../accordion/AccordionAdmin';
import { patchCourse, postCourse } from '../../../../hooks/AdminApi';
import * as Yup from "yup"


const AddKurs = ({ courseData }) => {
    const [open, setOpen] = useState(false);
    const [isPost, setIsPost] = useState("")

    // initial values
    const initialValueObjs = {
        title: "",
        poster_image: "",
        price: "",
        certification: "",
        paid: "",

    }

    // initial values state
    const [initialValues, setInitialValues] = useState(initialValueObjs)

    const { mutate:postMutate, isSuccess:postSuccess } = postCourse()
    const { mutate: patchMutate, isSuccess:patchSuccess } = patchCourse()

    // validation with Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("Ma'lumot kiritilmadi"),
        poster_image: Yup.mixed().required("Ma'lumot kiritilmadi"),
        price: Yup.string().when("paid", { is: true, then: () => Yup.string().required("Ma'lumot kiritilmadi"), }),
    })

    // onsubmit function
    const onSubmit = (values, onSubmitProps) => {
        const formData = new FormData();
        formData.append('image', values.poster_image);
        if (isPost) {
            postMutate(values)
        }
        else {
            patchMutate(
                {
                    title: values.title,
                    poster_image: values.poster_image,
                    id: values.id
                }
            )
        }
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }
    
    // close module when submitted success
    useEffect(() => {
        if (postSuccess || patchSuccess) {
            setOpen(false)
        }
    }, [postSuccess,patchSuccess])

    // edit function
    const EditCourse = (element) => {
        setOpen(true)
        setInitialValues({ id: element.id, title: element.title, price: element.price, certification: element.certification, paid: element.paid })
    }

    // toggle module
    const handleOpen = () => { setOpen(!open), setIsPost(true) };
    return (
        <div className='mt-10'>
            <AddKursForm isPost={isPost} type={"kurs"} open={open} handleOpen={handleOpen} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues} title={"Kurs qo'shish"} />
            <div className='flex justify-end'>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Kurs Qo'shish</span>
                </Button>
            </div>
            {courseData ?
                <div className='overflow-x-scroll'>
                    <div className='border-b px-3 text-sm    font-semibold min-w-[900px] py-2 border-gray-400 flex justify-between'>
                        <div className='flex flex-1 gap-5 items-center'>
                            <div className='w-14'>Rasm</div>
                            <div>Sarlavha</div>
                        </div>
                        <div className='w-[100px]'>Sozlamalar</div>
                    </div>
                    <div className='min-w-[900px]'>
                        {courseData?.map((data, i) => (
                            <AccordionAdmin setIsPost={setIsPost} edit={EditCourse} key={i} data={data} />
                        ))}
                    </div>
                </div>

                : "Kurslar kitilmadi..."}

        </div>
    )
}

export default AddKurs