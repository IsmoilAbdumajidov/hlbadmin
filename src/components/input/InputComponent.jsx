import { Field } from 'formik'
import React from 'react'

const InputComponent = ({ name, onChange, checked, className, typeInput, id, placeholder, value, required, refProp }) => {
  const a = ()=>{}
  return (
    <input checked={checked || ""} value={value || ""} type={typeInput || "text"} name={name || ""} onChange={onChange || a} className={`${className || ""} w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]`} id={id || ""} placeholder={placeholder || ""} />
  )
}

export default InputComponent