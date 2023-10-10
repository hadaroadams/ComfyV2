import React from 'react'

const FormInput = ({label,type,placeholder,name ,defaultValue}) => {
  return (
    <div className='flex flex-col space-y-3 text-[#394e6a]  w-full'>
      <label htmlFor={name}>{label}</label>
      <input type={type} defaultValue={defaultValue}  name={name} placeholder={placeholder} className="bg-[#FFFFFF] input input-bordered bg-transparent w-full" />
    </div>
  )
}

export default FormInput
