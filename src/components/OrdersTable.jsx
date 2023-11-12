import React from 'react'
import { useLoaderData } from 'react-router-dom'

const OrdersTable = () => {
    const {data}= useLoaderData().response.data
  return (
    <div className="overflow-x-auto">
        <table className="table table-sm  ">
            <thead>
            <tr className='text-[#77869c] border-none'>
                <th></th> 
                <th>Name</th> 
                <th>Address</th> 
                <th>Product</th> 
                <th>Cost</th> 
                <th className='hidden md:block'>Date</th>
            </tr>
            </thead> 
            <tbody className=' dark:bg-[#272935] dark:text-[]'>
                {
                    data.map((item,index)=>{
                        const {name,address,cartItems,numItemsInCart,orderTotal,updatedAt}=item.attributes
                        const even =(index+1)%2
                        return (
                            <tr key={index} className={`${!even?"bg-slate-200 dark:bg-[#181920] ":'bg-white dark:bg-[#272935]'} text-[#181920 ] dark:text-[#EBF2F2] border-none`}>
                                <th>{index+1}</th> 
                                <td>{name}</td> 
                                <td>{address}</td> 
                                <td>{numItemsInCart}</td> 
                                <td>{orderTotal}</td> 
                                <td className='hidden md:block'>{updatedAt}</td> 
                            </tr>
                        )
                    })
                }
            </tbody> 
            
        </table>

    </div>
  )
}

export default OrdersTable
