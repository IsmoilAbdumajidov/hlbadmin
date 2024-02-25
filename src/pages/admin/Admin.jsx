import React from 'react'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { instance } from '../../api/axios';
import { clearLS } from '../../utils/localStorage';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSaidbar from '../../components/admin/AdminSaidbar';

const Admin = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true)

    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        console.log("error");
        if ((error.response && error?.response?.status === 401) || error?.response?.status === 403) {
            clearLS()
            navigate("/adminLogin");
        } else if (error.response && error.response.status === 500) {
            console.log(error);
        }

        return Promise.reject(error);
    });

    const logOut = () => {
        clearLS()
        navigate("/adminLogin")
    }

    return (
        <div className='bg-[#EEEEEE] min-h-screen'>
            <AdminNavbar logOut={logOut} isOpen={isOpen} />

            <AdminSaidbar setIsOpen={setIsOpen} isOpen={isOpen} />

            <div className={`${isOpen ? "ml-12" : "ml-12 md:ml-60"}  transform ease-in-out duration-500 pt-20 px-2 md:px-8 pb-4 `}>
                <Outlet />
            </div>
        </div>
    )
}

export default Admin