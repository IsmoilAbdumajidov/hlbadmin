import React from 'react'
import Module from '../../../module/Module'
import InputComponent from '../../../input/InputComponent'
import { Button } from '@material-tailwind/react'

const AddLessonForm = ({setInitialValues,initialValues,handleOpen,onSubmit,open,}) => {
    return (
        <Module open={open} handleOpen={handleOpen} title={"Dars qo'shish"}>
            <form onSubmit={onSubmit} className='flex flex-col gap-6'>
                <div>
                    <label className='text-sm' htmlFor="title_lesson">Dars sarlavhasi</label>
                    <InputComponent value={initialValues.title} onChange={(e) => setInitialValues({ ...initialValues, title: e.target.value })} id={"title_lesson"} placeholder={"Kurs sarlavhasini kiriting"} />
                </div>
                <div className=''>
                    <label className='text-sm' htmlFor="ispaid"></label>
                    <InputComponent checked={initialValues.isPaid} className={"w-max"} onChange={(e) => setInitialValues({ ...initialValues, isPaid: e.target.checked })} typeInput={"checkbox"} id={"ispaid"} type={"file"} />
                </div>
                {initialValues.isPaid &&
                    <div>
                        <label className='text-sm' htmlFor="price">Dars narxi</label>
                        <InputComponent value={initialValues.price} onChange={(e) => setInitialValues({ ...initialValues, price: +e.target.value })} typeInput={"number"} id={"price"} />
                    </div>
                }
                <div className='flex justify-end gap-3'>
                    <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button type='submit' variant="gradient" color="green">
                        <span>Confirm</span>
                    </Button>
                </div>
            </form>
        </Module>
    )
}

export default AddLessonForm