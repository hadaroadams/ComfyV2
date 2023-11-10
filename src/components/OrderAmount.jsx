import React from 'react'
import { useSelector } from 'react-redux'
import { currencyFormater } from '../utilities/Index'
import { Form, Link } from 'react-router-dom'
import CartTotal from './CartTotal'

const OrderAmount = () => {
    
    const {user}= useSelector((state)=>state.user)
  return ( 
    
      <div className='flex  flex-col mt-5 md:mt-0 p-3 flex-[0.4] space-y-5 '>
          <CartTotal/>
          {
            user?(
              <Link to='/checkout' className='btn bg-blue-600 border-none hover:bg-blue-700 text-white'>{'proceed to checkout'.toLocaleUpperCase()}</Link>
              
            ):(
              <Link to='/login' className='btn bg-blue-600 border-none hover:bg-blue-700 text-white'>{'please login'.toLocaleUpperCase()}</Link>
              
            )
          }
      </div>
  
  )
}

export default OrderAmount
