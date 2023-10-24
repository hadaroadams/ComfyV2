import React from 'react'
import { ApiInstance } from '../utilities/Index'
import { useLoaderData } from 'react-router-dom'
import Filter from '../components/Filter'
import ProductSection from '../components/ProductSection'
import { useDispatch, useSelector } from 'react-redux'
const urls = '/products'

export const loader=async({request})=>{
  let url = new URL(request.url).searchParams.entries()
  const params = Object.fromEntries([...url]) 

  console.log(new URL(request.url).searchParams.entries())
    const {data} = await ApiInstance(urls, {params})
    console.log(params)
    return {data,params}
}

const Products = () => {
  const cart = useSelector((state)=> state.cart.value)
  const dispatch = useDispatch()
  console.log(cart)
  return (
    <div className='mx-20'>
        <Filter/>
        <ProductSection/>
    </div>
  )
}

export default Products
