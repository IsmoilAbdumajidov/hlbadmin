import React, { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody, Button, } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import { deleteCourse, deleteLesson, patchLesson, postLesson } from '../../hooks/AdminApi';
import AccHeaderKurs from '../admin/AddData/AddKurs/AccHeaderKurs';
import AddLessonForm from '../admin/AddData/AddKurs/AddLessonForm';
import * as Yup from "yup"
import { useEffect } from 'react';

// accardion icon component
function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );
}


const AccordionAdmin = ({ data, edit, setIsPost }) => {
    
    const [open, setOpen] = useState(0);
    const [openModule, setOpenModule] = useState(false);
    const [post, setPost] = useState(false)
    
    // initial values
    const initialValueObjs = { title: "", isPaid: false, price: "" }

    // initial values state
    const [initialValues, setInitialValues] = useState(initialValueObjs)

    const { mutate:postMutate, isSuccess:postSuccess } = postLesson()
    const { mutate: patchMutate, isSuccess:patchSuccess } = patchLesson()
    const { mutate: deleteL } = deleteLesson()
    const { mutate: deleteC } = deleteCourse()

    // validation with Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("Ma'lumot kiritilmadi"),
        price: Yup.string().when("isPaid", { is: true, then: () => Yup.string().required("Ma'lumot kiritilmadi"), }),
    })

    // onsubmit function
    const onSubmit = (values, onSubmitProps) => {
        console.log("Form data", values)
        if (post) {
            postMutate({
                course: data?.id,
                number: data?.lessons.length + 1,
                title: values.title,
                price: values.price,
                paid: values.isPaid
            })
        }
        else {
            patchMutate(
                {
                    id: values.id,
                    title: values.title,
                    price: +values.price,
                    paid: values.isPaid
                }
            )
        }
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }

    // delete function
    const deleteHandler = (type, id) => {
        if (type === "course") {
            deleteC(id)
        }
        else if (type === "lesson") {
            deleteL(id)
        }
    }
    // close module when submitted success
    useEffect(() => {
        if (postSuccess || patchSuccess) {
            setOpenModule(false)
        }
    }, [postSuccess,patchSuccess])

    // edit lesson
    const EditLesson = (element) => {
        // console.log(element);
        setInitialValues({ id: element.id, title: element.title, price: element.price, isPaid: element.paid })
        setOpenModule(true)
    }
    // toggle accardion
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    // toggle module
    const handleOpenModule = () => { setOpenModule(!openModule), setPost(true) };
    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader className='flex  min-w-[900px] w-full  py-2 items-center border-b border-gray-400'>
                    <AccHeaderKurs data={data} edit={edit} deleteHandler={deleteHandler} setIsPost={setIsPost} handleOpen={handleOpen}>
                        <Icon id={1} open={open} />
                    </AccHeaderKurs>
                </AccordionHeader>
                <AccordionBody className="border-b  flex flex-col gap-2 px-3 py-2 border-gray-400">
                    <AddLessonForm post={post} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues} handleOpen={handleOpenModule} open={openModule} />
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-black font-semibold'>Darslar:</div>
                        <Button variant="gradient" color="green" onClick={handleOpenModule}>
                            <span>Dars Qo'shish</span>
                        </Button>
                    </div>
                    {data.lessons.length ?
                        data.lessons.map((item, i) => (
                            <div key={i}>
                                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                                    <div>{item.title}</div>
                                    <div className='flex gap-5'>
                                        <div className='bg-green-500 p-1 rounded'>
                                            <CiEdit onClick={() => { EditLesson(item), setPost(false) }} className='w-6 h-6 text-white' />
                                        </div>
                                        <div className='bg-red-600 w-max p-1 rounded'>
                                            <VscTrash onClick={() => deleteHandler("lesson", item.id)} className='w-6 h-6 text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "Darslar mavjud emas..."}
                </AccordionBody>
            </Accordion>
        </>
    )
}

export default AccordionAdmin