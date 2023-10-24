import React from 'react'
import ProductItem from './ProductItem'
import { useLoaderData } from 'react-router-dom'

const Features = () => {
    const data = useLoaderData()
  return (
    <section className='px-8 md:px-20'>
        <h1 className='text-[#394E6A] dark:text-[#F8F8F2] font-semibold text-3xl mb-3'>Featured Products</h1>
        <hr className='dark:bg-[#F8F8F2]'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6'>
            {
                data.map((item,index)=>{
                  const {id}= item
                  const  {image,title,company,price}= item.attributes
                    return <ProductItem image={image} title={title} compnay={company} price={price} key={index} id={id} layOut={true}/>
                })
            }
        </div>
    </section>
  )
}

export default Features
