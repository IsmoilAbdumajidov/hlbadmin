import React, { useEffect, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, Button } from '@material-tailwind/react';
import { deleteArticle, deleteQuiz, patchQuiz, postQuiz } from '../../hooks/AdminApi';
import AddQuizForm from '../admin/AddData/AddArticle/AddQuizForm';

function Icon({ id, open }) {
    return (
        <IoIosArrowDown className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} />
    );
}
const initialValue = { question: "", option: "", answer: "", mark_1: "", mark_2: "", mark_3: "", mark_4: "", score: "", time: "" }
const AccardionArticle = ({ data, setOnChange, edit }) => {
    
    const [open, setOpen] = useState(0);
    const [openModule, setOpenModule] = useState(false);
    const [post, setPost] = useState(false)

    const { mutate: deleteAr, isSuccess } = deleteArticle()
    const { mutate: deleteQu, isSuccess: quizDel } = deleteQuiz()
    const { mutate, isSuccess: postSuc } = postQuiz()
    const { mutate: patchQ, isSuccess: patchSuc } = patchQuiz()
    const [initialValues, setInitialValues] = useState(initialValue)

    const deleteHandler = (type, id) => {
        if (type === "article") {
            deleteAr(id)
        }
        else if (type === "quiz") {
            deleteQu(id)
        }
    }

    useEffect(() => {
        if (isSuccess || postSuc || patchSuc || quizDel) {
            setOnChange(true)
        }
        else {
            setOnChange(false)
        }
    }, [isSuccess, postSuc, patchSuc, quizDel])

    const answerHandler = (e) => {
        setInitialValues({ ...initialValues, answer: e.target.nextElementSibling.name })
    }
    const inpHandler = (e) => {
        setInitialValues({ ...initialValues, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (post) {
            mutate({ ...initialValues, article_id: data?.id })
        }
        else {
            patchQ({ ...initialValues, article_id: data?.id })
        }
    }

    const EditQuiz = (element) => {
        // id: element.id, answer: element.answer, mark_1: element.mark_1, mark_2: element.mark_2, mark_3: element.mark_3, mark_4: element.mark_4, option: element.option, question: element.question, time: element.time, score: element.score, 
        setInitialValues(element)
        setOpenModule(true)
        setPost(false)
    }
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const handleOpenModule = () => { setOpenModule(!openModule), setPost(true), setInitialValues("") };
    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader className='flex  min-w-[900px] w-full  py-4 items-center border-b border-gray-400'>
                    <div onClick={() => handleOpen(1)} className='flex-1 pr-5 flex justify-between items-center'>
                        <div className='flex-1 flex items-center gap-5'>
                            <div className='font-normal text-black text-[16px]'>
                                {data?.title}
                            </div>
                        </div>
                        <Icon id={1} open={open} />
                    </div>
                    <div className='flex justify-end items-center'>
                        <div className='flex gap-5'>
                            <CiEdit onClick={() => edit(data)} className='w-6 h-6 text-green-500' />
                            <VscTrash onClick={() => deleteHandler("article", data?.id)} className='w-6 h-6 text-red-600' />
                        </div>
                        <h1></h1>
                    </div>
                </AccordionHeader>
                <AccordionBody className="border-b  flex flex-col gap-2 px-3 py-2 border-gray-400">
                    <AddQuizForm openModule={openModule} handleOpenModule={handleOpenModule} onSubmit={onSubmit} inpHandler={inpHandler} answerHandler={answerHandler} initialValues={initialValues} />
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-black font-semibold'>Darslar:</div>
                        <Button variant="gradient" color="green" onClick={handleOpenModule}>
                            <span>Savol Qo'shish</span>
                        </Button>
                    </div>
                    {data.quizzes.length ?
                        data.quizzes.map((item, i) => (
                            <div key={i}>
                                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                                    <div>{item.question}</div>
                                    <div className='flex gap-5'>
                                        <div className='bg-green-500 p-1 rounded'>
                                            <CiEdit onClick={() => { EditQuiz(item) }} className='w-6 h-6 text-white' />
                                        </div>
                                        <div className='bg-red-600 w-max p-1 rounded'>
                                            <VscTrash onClick={() => deleteHandler("quiz", item.id)} className='w-6 h-6 text-white' />
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

export default AccardionArticle