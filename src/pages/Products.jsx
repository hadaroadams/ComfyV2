import React from 'react'
import { ApiInstance } from '../utilities/Index'
import { useLoaderData } from 'react-router-dom'
import Filter from '../components/Filter'
import ProductSection from '../components/ProductSection'
import { useDispatch, useSelector } from 'react-redux'
const urls = '/products'


const filterProducts=(queryParams)=>{
  const {search,category,company,sort,price,page} = queryParams

return {
  queryKey:['filteredProducts',search,category,company,sort,price,page],
  queryFn:()=>ApiInstance(urls,{params:queryParams})
}
}

export const loader=(queryClient)=>
async({request})=>{
  let url = new URL(request.url).searchParams.entries()
  const params = Object.fromEntries([...url]) 
  console.log(params)
  const {data}= await queryClient.ensureQueryData(filterProducts(params))
  console.log(new URL(request.url).searchParams.entries())
    // const {data} = await ApiInstance(urls, {params})
    console.log(data)
    return {data,params}
}

const Products = () => {
  const cart = useSelector((state)=> state.cart.value)
  const dispatch = useDispatch()
  // console.log(cart)
  return (
    <div className='mx-20'>
        <Filter/>
        <ProductSection/>
    </div>
  )
}

export default Products
