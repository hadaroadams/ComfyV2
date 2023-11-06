import React from 'react'
import { currencyFormater } from '../utilities/Index'
import { useSelector } from 'react-redux'

const CartTotal = () => {
    const {cartTotal}= useSelector((state)=>state.cart.value)
  return (
    <div className=' h-fit mt-5 space-y-4 p-8 bg-[#F0F6FF] rounded-xl flex-[0.5]'>
        <p className='relative border-b-[1px] border-slate-300'>subtotal <span className='absolute right-0'>{currencyFormater(cartTotal)}</span></p>
        <p className='relative border-b-[1px] border-slate-300'>Shipping <span className='absolute right-0'>$ 5.0</span></p>
        <p className='relative border-b-[1px] border-slate-300'>Tax <span className='absolute right-0'>$219.99</span></p>
        <p className='relative border-b-[1px] border-slate-300'>Order Total <span className='absolute right-0'>$2424.92</span></p>
    </div>
  )
}

export default CartTotal
