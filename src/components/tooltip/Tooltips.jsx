import { Tooltip, Button } from "@material-tailwind/react";
import React from 'react'

const Tooltips = ({ content, position, children }) => {
    return (
        <Tooltip
            placement={position}
            content={content}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
        >
            <Button className="p-0 bg-transparent">{children}</Button>
        </Tooltip>
    );
}

export default Tooltips