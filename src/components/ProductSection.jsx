import React, { useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import ProductItem from './ProductItem';
import { Title } from '@mui/icons-material';
import { Pagination } from '@mui/material';
import PaginationContainer from './PaginationContainer';
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';

const ProductSection = () => {
  const [layOut,setLayOut] = useState(true)
  const {data,params} = useLoaderData()
  const {search,pathname} = useLocation()

  const param = new URLSearchParams(search)
  return (
    <section className='mt-10'>
        <div className='flex justify-between'>
            <div>
              <h3 className='text-xl text-[#021431]'>
                <span>22</span> Products
              </h3>
            </div>
            <div className='space-x-2'>
              <button className={` text-[#021431] duration-150 hover:bg-slate-300 w-10 h-10 rounded-full border-none ${layOut && 'bg-[#0069E0] text-slate-400 hover:bg-[#0c5bb6]'}`} onClick={()=>{setLayOut(true)}}>
                <GridViewIcon/>
              </button>
              <button className={` text-[#021431] duration-150 hover:bg-slate-300 w-10 h-10 rounded-full border-none ${!layOut && 'bg-[#0069E0] text-slate-400 hover:bg-[#0c5bb6]'}`} onClick={()=>{setLayOut(false)}}>
                <ViewListIcon/>
              </button>
            </div>
        </div>
        <div className={`grid  ${layOut?'md:grid-cols-3':''} gap-4 grid-cols-1`}>
          {
            data.data.map((item,index)=>{
                    const {id}= item
                    const  {image,title,company,price}= item.attributes
                      return <ProductItem image={image} title={title} compnay={company} price={price} key={index} id={id} layOut={layOut}/>
                  })
          }
        </div>
        <div className='flex justify-end my-6 '>
          <PaginationContainer/>
        </div>
    </section>
  )
}

export default ProductSection
 