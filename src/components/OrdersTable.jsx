import React from 'react'
import { useLoaderData } from 'react-router-dom'

const OrdersTable = () => {
    const {data}= useLoaderData().response.data
   
    console.log(data)
  return (
    <div className="overflow-x-auto">
        <table className="table table-sm ">
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
            <tbody className=''>
                {
                    data.map((item,index)=>{
                        const {name,address,cartItems,numItemsInCart,orderTotal,updatedAt}=item.attributes
                        const even =(index+1)%2
                        console.log(even)
                        return (
                            <tr className={`${!even?"bg-slate-200 ":'bg-white'} text-[#021431] border-none`}>
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
