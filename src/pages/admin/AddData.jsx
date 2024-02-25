import React from 'react'
import { useState } from 'react'
import AddKurs from '../../components/admin/AddData/AddKurs/AddKurs'
import AddArticle from '../../components/admin/AddData/AddArticle/AddArticle'
import { getCourseAdmin } from '../../hooks/AdminApi'


const AddData = () => {
    const [isOpen, setisOpen] = useState(true)
    const { data } = getCourseAdmin()
    // console.log(data);
    return (
        <div>
            <div className='rounded-lg flex m-auto  items-center p-2 gap-2 mb-7 bg-white w-max'>
                <button onClick={() => setisOpen(true)} className={`${isOpen ? "bg" : "hover:bg-gray-100"} p-2 px-3 sm:px-6 rounded-md transition-all`}>Kurs qo'shish</button>
                <button onClick={() => setisOpen(false)} className={`${!isOpen ? "bg" : "hover:bg-gray-100"} p-2 px-3 sm:px-6 rounded-md transition-all`}>Article qo'shish</button>
            </div>
            <div>
                {
                    isOpen ? <AddKurs courseData={data?.data} /> : <AddArticle courseData={data?.data} />
                }
            </div>
        </div>
    )
}

export default AddData