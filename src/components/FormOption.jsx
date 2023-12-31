import React, { useState } from 'react'

const FormOption = ({label,options,name,}) => {
  const [opt,setOpt] = useState(options[0])
  return (
    <div className='w-full space-y-3 text-[#394e6a] dark:text-[white]'>
      <label htmlFor={name}>
        {label}
      </label>
      <select name={name} onChange={(e)=>{setOpt(e.target.value)}} className='select w-full bg-[#FFFFFF] dark:bg-[#272935] border-gray-200 '>
        {
            options.map((item,key)=>{
                return (<option value={item} key={key}>{item}</option>)
            })
        }
      </select>
    </div>
  )
}

export default FormOption
