import React from 'react'
import FormOption from './FormOption'
import { currencyFormater, getNumberOfItems } from '../utilities/Index'
import { useDispatch } from 'react-redux'
import { editItem, removeItem } from '../features/CartSlice'

const CartItem = ({image,title,company,color,price ,amount,id}) => {
    console.log(color)
  const dispatch = useDispatch()
  return (
    <article className='flex justify-between pb-4 min-[200px]:flex-col sm:flex-row border-b-2' >
        <div className=' w-[130px] h-[130px] rounded-xl overflow-hidden'>
            <img className='w-full h-full' src={image} alt="" />
        </div>
        <div className='space-y-2 flex-[0.4] '>
            <h3 className='text-xl font-semibold text-[#5e6062]'>{title}</h3>
            <h4>{company}</h4>
            <p className='text-[#5e6062]'>color:<span className={` badge badge-sm border-none`} style={{backgroundColor:`${color}`}}></span></p>
        </div>
        <div className='w-16 flex flex-[0.5] justify-between min-[200px]:flex-col sm:flex-row space-y-2 md:space-y-0'>
            <div className='flex flex-col'>
                <label htmlFor="amount">
                    Amount
                </label>
                <select value={amount} onChange={(e)=>{dispatch(editItem({amount:parseInt(e.target.value),cartId:id}))}} className="select select-bordered select-xs  max-w-xs bg-transparent text-[#5e6062] mt-2  w-24 " name='amount' >
                    {
                        getNumberOfItems(12)
                    }
                </select>
                <button onClick={()=>{dispatch(removeItem({cartId:id,amount:amount}))}} className='text-[#4870f1] mt-2 w-fit  '>remove</button>
            </div>
            <h1 className='text-[black] font-medium'>{currencyFormater(price)}</h1>
        </div>
    </article>
  )
}

export default CartItem
