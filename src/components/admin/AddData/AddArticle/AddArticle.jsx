import React, { useEffect } from 'react'
import AddArticleForm from './AddArticleForm'
import { Button } from '@material-tailwind/react'
import { useState } from 'react';
import AccardionArticle from '../../../accordion/AccardionArticle';
import { addArticle, getArticles, patchArticle } from '../../../../hooks/AdminApi';
import AddKursForm from '../AddKurs/AddKursForm';
import * as Yup from "yup"

const AddArticle = ({ courseData }) => {

  const [open, setOpen] = useState(false);
  const [isPost, setIsPost] = useState("")
  const [selectId, setSelectId] = useState(0)
  const [selectLesson, setSelectLesson] = useState(false)
  const [change, setOnChange] = useState(false)

  // initial values
  const initialValueObjs = {
    title: "",
    poster_image: "",
    price: "",
    paid: "",
  }

  // initial values state
  const [initialValues, setInitialValues] = useState(initialValueObjs)

  // const { mutate: getArticleMutate, data } = getArticles(
  const { refetch, data } = getArticles(
    {
      course: courseData[selectId]?.id,
      lesson: selectLesson || courseData[selectId]?.lessons[0]?.id
    }
  )
  const { mutate: articleMutate, isSuccess: addSuccess } = addArticle()
  const { mutate: patchMutate, isSuccess } = patchArticle()

  // validation with Yup
  const validationSchema = Yup.object({
    title: Yup.string().required("Ma'lumot kiritilmadi"),
    poster_image: Yup.mixed().required("Ma'lumot kiritilmadi"),
    price: Yup.string().when("paid", { is: true, then: () => Yup.string().required("Ma'lumot kiritilmadi"), }),
  })

  useEffect(() => {
    if (isSuccess || addSuccess) {
      setOnChange(true)
    }
    else {
      setOnChange(false)
    }
  }, [isSuccess, addSuccess])

  // onsubmit function
  const onSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append('file', values.poster_image);
    if (isPost) {
      articleMutate(
        {
          number: data.data.length + 1,
          lesson: selectLesson || courseData[selectId]?.lessons[0]?.id,
          file: values.poster_image,
          title: values.title
        })
    }
    else {
      patchMutate(
        {
          title: values.title,
          file: values?.poster_image,
          id: values.id
        }
      )
      console.log(initialValues);
    }

    setTimeout(() => {
      onSubmitProps.setSubmitting(false)
      onSubmitProps.resetForm()
    }, 3000);
    
    
  }

  useEffect(() => {
    const orderCourseHandler = () => {
      if (selectLesson !== undefined && courseData[selectId]?.lessons[0]?.id !== undefined) {
        refetch()
      }
    }
    orderCourseHandler()
  }, [change, selectId, selectLesson])

  // edit course
  const EditCourse = (element) => {
    setInitialValues({ id: element.id, title: element.title })
    setOpen(true)
    setIsPost(false)
  }

  // toggle module
  const handleOpen = () => { setOpen(!open), setIsPost(true), setInitialValues(initialValueObjs) };
  return (
    <div className='mt-10'>
      <div className='flex my-7 justify-between items-center gap-5'>
        <div className='flex-1'>
          <label className='text-sm' htmlFor="select_kurs">Mavzu qo'shish</label>
          <select className='w-full focus:outline-[#FF663B] bg-white' onChange={(e) => { setSelectId(e.target.value) }} name={"title"} id={"select_kurs"} placeholder={"Kursni tanlang"} >
            {courseData?.map((item, i) => (
              <option key={i} value={i}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label className='text-sm' htmlFor="select_lesson">Darslar</label>
          <select className='w-full focus:outline-[#FF663B] bg-white' onChange={(e) => { setSelectLesson(e.target.value) }} name={"title"} id={"select_lesson"} placeholder={"Kursni tanlang"} >
            {
              courseData[selectId]?.lessons?.length ?
                courseData[selectId]?.lessons?.map((item, i) => (
                  <option key={i} value={item.id}>{item.title}</option>
                )) :
                <option value={"none"}>Darslar mavjud emas</option>
            }
          </select>
        </div>
      </div>
      {
        courseData[selectId]?.lessons.length ?
          <div>
            <AddKursForm isPost={isPost} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues} handleOpen={handleOpen} open={open} title={"Article qo'shish"} />
            <div className='flex justify-end'>
              <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Mavzu Qo'shish</span>
              </Button>
            </div>
            <div className='overflow-x-scroll'>
              <div className='border-b  text-sm font-semibold min-w-[900px] py-2 border-gray-400 flex justify-between items-center'>
                <div className='flex-1'>Sarlavha</div>
                <div className='w-[100px]'>Sozlamalar</div>
              </div>
              <div className='min-w-[900px]'>
                {data?.data?.map((item, i) => (
                  <AccardionArticle edit={EditCourse} setOnChange={setOnChange} key={i} data={item} />
                ))}
              </div>
            </div>
          </div> : "darslar yo'q..."
      }
    </div>
  )
}

export default AddArticle