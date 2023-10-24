import React from 'react'

const CartHeader= ({message}) => {
  return (
    <div className='text-3xl font-bold text-[#394E6A]  mt-[40px]'>
      <h1>{message}</h1>
        <div className='w-full mt-4 bg-[#e0e2e4] h-[1px]'></div>
    </div>
  )
}

export default CartHeader
