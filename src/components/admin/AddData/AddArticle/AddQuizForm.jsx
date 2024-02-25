import React from 'react'
import Module from '../../../module/Module'
import InputComponent from '../../../input/InputComponent'
import { Button } from '@material-tailwind/react'

const AddQuizForm = ({ inpHandler, handleOpenModule, initialValues, onSubmit, openModule, answerHandler }) => {
    return (
        <Module open={openModule} handleOpen={handleOpenModule} title={"Dars qo'shish"}>
            <form onSubmit={onSubmit} className='flex flex-col gap-6'>
                <div>
                    <label className='text-sm' htmlFor="quiz">Savol</label>
                    <InputComponent name={"question"} value={initialValues.question} onChange={(e) => inpHandler(e)} id={"quiz"} placeholder={"Quiz"} />
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <label className='text-sm' htmlFor="variant1">1-variant</label>
                        <div className='flex items-center gap-2'>
                            <input checked={initialValues.answer == "mark_1" ? true : false} onChange={answerHandler} name='value' type={"radio"} className={"flex-1"} />
                            <InputComponent name={"mark_1"} value={initialValues.mark_1} onChange={(e) => inpHandler(e)} id={"variant1"} placeholder={"Variant 1"} />
                        </div>
                    </div>
                    <div>
                        <label className='text-sm' htmlFor="variant2">2-variant</label>
                        <div className='flex items-center gap-2'>
                            <input checked={initialValues.answer == "mark_2" ? true : false} onChange={answerHandler} name='value' type={"radio"} className={"flex-1"} />
                            <InputComponent name={"mark_2"} value={initialValues.mark_2} onChange={(e) => inpHandler(e)} id={"variant2"} placeholder={"Variant 2"} />
                        </div>
                    </div>
                    <div>
                        <label className='text-sm' htmlFor="variant3">3-variant</label>
                        <div className='flex items-center gap-2'>
                            <input checked={initialValues.answer == "mark_3" ? true : false} onChange={answerHandler} name='value' type={"radio"} className={"flex-1"} />
                            <InputComponent name={"mark_3"} value={initialValues.mark_3} onChange={(e) => inpHandler(e)} id={"variant3"} placeholder={"Variant 3"} />
                        </div>
                    </div>
                    <div>
                        <label className='text-sm' htmlFor="variant4">4-variant</label>
                        <div className='flex items-center gap-2'>
                            <input checked={initialValues.answer == "mark_4" ? true : false} onChange={answerHandler} name='value' type={"radio"} className={"flex-1"} />
                            <InputComponent name={"mark_4"} value={initialValues.mark_4} onChange={(e) => inpHandler(e)} id={"variant4"} placeholder={"Variant 4"} />
                        </div>
                    </div>
                </div>
                {/* <div>
            <label className='text-sm' htmlFor="score">Javob</label>
            <InputComponent className={"border-green-400"} name={"answer"} value={initialValues.answer} onChange={(e)=>inpHandler(e)} id={"javob"} placeholder={"Savol javobi"} />
        </div> */}
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <label className='text-sm' htmlFor="score">Score</label>
                        <InputComponent name={"score"} value={initialValues.score} onChange={(e) => inpHandler(e)} typeInput={"number"} id={"score"} placeholder={"Score"} />
                    </div>
                    <div>
                        <label className='text-sm' htmlFor="time">Vaqt/s</label>
                        <InputComponent name={"time"} value={initialValues.time} onChange={(e) => inpHandler(e)} typeInput={"number"} id={"time"} placeholder={"Vaqt"} />
                    </div>
                </div>
                <div>
                    <label className='text-sm' htmlFor="option">Option</label>
                    <textarea name={"option"} value={initialValues.option} onChange={(e) => inpHandler(e)} className='w-full border max-h-[100px] bg-gray-50 rounded-md py-3 p-2 focus:outline-[#FF663B]' id={"option"} placeholder={"Kurs sarlavhasini kiriting"} />
                </div>
                <div className='flex justify-end gap-3'>
                    <Button variant="text" color="red" onClick={handleOpenModule} className="mr-1">
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

export default AddQuizForm