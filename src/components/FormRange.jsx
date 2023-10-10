import React from 'react'

const FormRange = () => {
  return (
    <div className="form-control w-full text-[#021431] ">
        <label className="label ">
            <span className="label-text text-[#021431]">Select Price</span>
            <span className="label-text-alt text-[#021431]">{}</span>
        </label>
        <input type="range" min={0} max="100" defaultValue={100} className="range range-accent" />        
        <label className="label">
            <span className="label-text-alt text-[#021431] font-semibold">0</span>
            <span className="label-text-alt text-[#021431] font-semibold">Max:Ghc1,000.00</span>
         </label>
    </div>
  )
}

export default FormRange
