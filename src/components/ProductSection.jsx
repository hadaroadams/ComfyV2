import React, { useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const ProductSection = () => {
  const [layOut,setLayOut] = useState(false)
  console.log(layOut)
  return (
    <section className='mt-10'>
        <div className='flex justify-between'>
            <div>
              <h3 className='text-xl text-[#021431]'>
                <span>22</span> Products
              </h3>
            </div>
            <div className='space-x-2'>
              <button className={` text-[#021431] duration-150 hover:bg-slate-300 w-10 h-10 rounded-full border-none ${!layOut && 'bg-[#0069E0] text-slate-400 hover:bg-[#0c5bb6]'}`} onClick={()=>{setLayOut(false)}}>
                <GridViewIcon/>
              </button>
              <button className={` text-[#021431] duration-150 hover:bg-slate-300 w-10 h-10 rounded-full border-none ${layOut && 'bg-[#0069E0] text-slate-400 hover:bg-[#0c5bb6]'}`} onClick={()=>{setLayOut(true)}}>
                <ViewListIcon/>
              </button>
            </div>
        </div>
        <div>
        </div>
    </section>
  )
}

export default ProductSection
