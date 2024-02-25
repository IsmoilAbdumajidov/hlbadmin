import React from 'react'
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";

const AccHeaderKurs = ({ data, edit, handleOpen, deleteHandler, setIsPost,children }) => {
    return (
        <>
            <div onClick={() => handleOpen(1)} className='flex-1 pr-5 flex justify-between items-center'>
                <div className='flex-1 flex items-center gap-5'>
                    <img className='w-16 h-14 rounded object-cover' src={data?.poster_image} alt="" />
                    <div className='font-normal text-black text-[16px]'>
                        {data?.title}
                    </div>
                </div>
                {children}
            </div>
            <div className='flex col-span-1 justify-end items-center'>
                <div className='flex gap-5'>
                    <CiEdit onClick={() => { edit(data), setIsPost(false) }} className='w-6 h-6 text-green-500' />
                    <VscTrash onClick={() => deleteHandler("course", data?.id)} className='w-6 h-6 text-red-600' />
                </div>
                <h1></h1>
            </div>
        </>
    )
}

export default AccHeaderKurs