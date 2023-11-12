import React from 'react'
import { ApiInstance } from '../utilities/Index'
import CartHeader from '../components/CartHeader'
import OrdersTable from '../components/OrdersTable'
import { useLoaderData } from 'react-router-dom'
import { Pagination } from '@mui/material'
import ComplexPagination from '../components/ComplexPagination'

const url='/orders'

const orderQuery =(params,user)=>{
    // console.log(params,user)

    return{
        queryKey:['orders',user.username,params.page?parseInt(params.page): 1],
        queryFn:async()=>{
            // console.log(queryKey)
            return ApiInstance(url,{
                params,
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
        })

        }
    }

}

export const loader=(store,queryClient)=>
async({request})=>{
    const { user }= store.getState().user
    // console.log(request)
    const params =Object.fromEntries([...new URL(request.url).searchParams.entries()])
    // console.log(params)

    const response = await queryClient.ensureQueryData(orderQuery(params,user))
    return{response}
       
}

const Order = () => {
    const {total}= useLoaderData().response.data.meta.pagination
    // console.log(total)
   
  return (
    <div className='mx-10'>
        <CartHeader message={'Your Orders'}/>
        <h1 className='text-[#394E6A] dark:text-[#EBF2F2] text-lg my-5'>Total Order: <span className='font-bold'>{total}</span></h1>
        <OrdersTable/>
        <ComplexPagination/>
    </div>
  )
}

export default Order
