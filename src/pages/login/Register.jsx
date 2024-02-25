import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RegisterAnim from '../../components/LottiAnimations/RegisterAnimation/RegisterAnim'
import { getFromLS } from '../../utils/localStorage'
import { FaArrowLeft } from "react-icons/fa6";
import SignIn from './SignIn';
const Register = () => {
    const navigate = useNavigate()
    const [isOpen, setisOpen] = useState('')
    const location = useLocation()
    const token = getFromLS("a-token")
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, []);

    useEffect(() => {
        setisOpen(location.pathname.includes("sign-up") ? false : true)
    }, [])

    return (
        <div className='min-h-screen bg-orange-50 py-5'>
            <button onClick={() => navigate('/')} className='border ml-10 mb-10 xl:mb-0 bg p-2 text-white rounded-md'>
                <FaArrowLeft className='' />
            </button>
            <div className='h-full main-container items-center grid grid-cols-1 gap-52 lg:grid-cols-2 justify-between'>
                <div>
                    <SignIn />
                </div>
                <div className='hidden lg:block'>
                    <RegisterAnim />
                </div>
            </div>
        </div>
    )
}

export default Register