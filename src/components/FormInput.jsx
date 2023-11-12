import React, { useState } from 'react'

const FormInput = ({label,type,placeholder,name ,defaultValue}) => {
  const [showPassword,setShowPAssword] = useState(false)
  return (
    <div className='flex flex-col space-y-3 text-[#394e6a] dark:text-[white]  w-full'>

      <label htmlFor={name}>{label}</label>
      <div className='relative'>
        {
          type=='password' &&(
            <button type='button' onClick={()=>{setShowPAssword(!showPassword)}}  className='absolute right-0 top-0 bottom-0 px-2 text-[1.3em] cursor-pointer'>{showPassword?<i class="fa-regular fa-eye"></i>:<i class="fa-regular fa-eye-slash"></i>}</button>
          )
        }
        <input type={showPassword?'text':type} defaultValue={defaultValue}  name={name} placeholder={placeholder} className="bg-[#FFFFFF] input input-bordered bg-transparent w-full" />
      </div>
    </div>
  )
}

export default FormInput
