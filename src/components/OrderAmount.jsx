import React from 'react'
import { useSelector } from 'react-redux'
import { currencyFormater } from '../utilities/Index'

const OrderAmount = () => {
    const {cartTotal}= useSelector((state)=>state.cart.value)
    console.log(cartTotal)
  return ( 
    <div className='flex  flex-col mt-5 md:mt-0 p-3 flex-[0.4] space-y-5 '>
        <div className=' space-y-4 p-8 bg-[#F0F6FF] rounded-xl'>
            <p className='relative border-b-[1px] border-slate-300'>subtotal <span className='absolute right-0'>{currencyFormater(cartTotal)}</span></p>
            <p className='relative border-b-[1px] border-slate-300'>Shipping <span className='absolute right-0'>$ 5.0</span></p>
            <p className='relative border-b-[1px] border-slate-300'>Tax <span className='absolute right-0'>$219.99</span></p>
            <p className='relative border-b-[1px] border-slate-300'>Order Total <span className='absolute right-0'>$2424.92</span></p>
        </div>
        <button className='btn bg-blue-600 border-none hover:bg-blue-700'>Please Login</button>
    </div>
  )
}

export default OrderAmount
