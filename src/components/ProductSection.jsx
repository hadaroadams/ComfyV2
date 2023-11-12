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

  // const param = new URLSearchParams(search)
 
  return (
    <section className='mt-10'>
        <div className='flex justify-between'>
            <div>
              <h3 className='text-xl text-[#021431] dark:text-[white]'>
                <span>{data.data.length}</span> Products
              </h3>
            </div>
            <div className='space-x-2 dark:text-[white]'>
              <button className={`text-[#021431] duration-150 dark:text-[white] hover:bg-slate-300 w-10 h-10 rounded-full border-none ${layOut && 'bg-[#0069E0] dark:bg-[#F67FC5] text-slate-400 hover:bg-[#0c5bb6]'}`} onClick={()=>{setLayOut(true)}}>
                <GridViewIcon/>
              </button>
              <button className={`text-[#021431] duration-150 dark:text-[white] hover:bg-slate-300 w-10 h-10 rounded-full border-none ${!layOut && 'bg-[#0069E0] dark:bg-[#F67FC5] text-slate-400 hover:bg-[#0c5bb6]'}`} onClick={()=>{setLayOut(false)}}>
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
          {
            !(data.data.length) && <h1 className='text-[red] absolute left-0 right-0 w-[200px] my-0 mx-auto font-bold text-[1.3em]'>Search not found</h1>
          }
        </div>
        <div className='flex justify-end my-6 '>
          <PaginationContainer/>
        </div>
    </section>
  )
}

export default ProductSection
 