import React, { useState } from 'react'
import { currencyFormater } from '../utilities/Index'

const FormRange = () => {
  const [priceRange,setPriceRange]= useState(100000)
  // console.log(priceRange)
  return (
    <div className="form-control w-full text-[#021431] dark:text-[white] ">
        <label className="label ">
            <span className="label-text text-[#021431] dark:text-[white]">Select Price</span>
            <span className="label-text-alt text-[#021431] dark:text-[white]">{}</span>
        </label>
        <input name='price' onChange={(e)=>{ console.log(e.target.value) ;setPriceRange(parseInt(e.target.value))}} type="range" min={0} max="100000" defaultValue={100000} className="range range-accent" />        
        <label className="label">
            <span className="label-text-alt text-[#021431] font-semibold dark:text-[white]">0</span>
            <span className="label-text-alt text-[#021431] font-semibold dark:text-[white]">Max:{currencyFormater(priceRange)}</span>
         </label>
    </div>
  )
}

export default FormRange
