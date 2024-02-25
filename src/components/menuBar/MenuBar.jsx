import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FaRegUser } from "react-icons/fa6";
import { jwtDecode } from 'jwt-decode';
import { getFromLS } from '../../utils/localStorage';
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MenuBar = ({ logOut }) => {
    const token = getFromLS("a-token");
    const code = token ? jwtDecode(token) : ""
    // console.log(full_name);
    return (
        <Menu
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
        >
            <MenuHandler>
                <Button> Menu</Button>
            </MenuHandler>
            <MenuList className='p-1'>
                <MenuItem>
                    <Link className='flex items-center gap-2' to={"/user-page"}>
                        <FaRegUser />
                        <Typography variant="small" className="font-medium">
                            {code?.full_name || "Admin"}
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={() => logOut()} className="flex items-center gap-2">
                    <IoLogOutOutline />
                    <Typography variant="small" className="font-medium">
                        LogOut
                    </Typography>
                </MenuItem>
                <MenuItem >
                    <Link className='flex items-center gap-2' to={"/admin"}>
                        <FaRegUser />
                        <Typography variant="small" className="font-medium">
                            Admin Panel
                        </Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu >
    )
}

export default MenuBar