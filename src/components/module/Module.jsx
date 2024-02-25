import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";

const Module = ({ children,open, title, handleOpen }) => {

    return (
        <>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{title}</DialogHeader>
                <DialogBody>
                    {children || ""}
                    
                </DialogBody>
            </Dialog>
        </>
    )
}

export default Module