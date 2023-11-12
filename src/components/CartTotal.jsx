import React from 'react'
import { currencyFormater } from '../utilities/Index'
import { useSelector } from 'react-redux'

const CartTotal = () => {
    const {cartTotal,shipping,tax,orderTotal}= useSelector((state)=>state.cart.value)
  return (
    <div className=' h-fit mt-5 space-y-4 p-8 text-[#394E6A] dark:text-[white] bg-[#F0F6FF] dark:bg-[#181920] rounded-xl flex-[0.5]'>
        <p className='relative border-b-[1px] border-slate-300'>subtotal <span className='absolute right-0'>{currencyFormater(cartTotal)}</span></p>
        <p className='relative border-b-[1px] border-slate-300'>Shipping <span className='absolute right-0'>{currencyFormater(shipping)}</span></p>
        <p className='relative border-b-[1px] border-slate-300'>Tax <span className='absolute right-0'>{currencyFormater(tax)}</span></p>
        <p className='relative border-b-[1px] border-slate-300'>Order Total <span className='absolute right-0'>{currencyFormater(orderTotal)}</span></p>
    </div>
  )
}

export default CartTotal
