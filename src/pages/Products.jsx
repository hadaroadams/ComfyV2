import React from 'react'
import { ApiInstance } from '../utilities/Index'
import { useLoaderData } from 'react-router-dom'
import Filter from '../components/Filter'
import ProductSection from '../components/ProductSection'

const urls ='/products?page=1'
export const loader=async()=>{
    const {data} = await ApiInstance(urls)
    console.log(data)
    return data
}

const Products = () => {
    const {data}=useLoaderData()
    console.log(data)
  return (
    <div className='mx-20'>
        <Filter/>
        <ProductSection/>
    </div>
  )
}

export default Products
