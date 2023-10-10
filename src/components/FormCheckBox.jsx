import React from 'react'

const FormCheckBox = () => {
  return (
    <div className="form-control w-full flex items-center">
        <label className="cursor-pointer label flex flex-col w-fit h-fit" disable>
            <span className="label-text ">Remember me</span>
        </label>
        <input type="checkbox"  className="checkbox checkbox-info mt-1" />
    </div>
  )
}

export default FormCheckBox
