import React from 'react'

const TextError = ({ children }) => {
    return (
        <div className='text-red-500 mt-1 text-xs normal-case'>{children}</div>
    )
}

export default TextError