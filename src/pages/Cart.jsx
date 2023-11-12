import React from 'react'
import CartHeader from '../components/CartHeader'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import OrderAmount from '../components/OrderAmount'

const Cart = () => {
  const {cartItems}= useSelector((state)=> state.cart.value)

  //  console.log(cartItems)
  if(cartItems.length==0){ {/* would have to change*/}
    return(
    <> 
    <div className=' mx-[20px]'>
      <CartHeader message={'Your Cart Is Empty'}/>
    </div>
    </>
    )
  }else{
    return (
      <div className='mx-[20px] '>
        <CartHeader message={'Shopping Cart'}/>
        <div className='my-4 flex gap-x-28 flex-col md:flex-row'>
            <div className='flex-[0.6] space-y-5'>
              {
                cartItems.map((item,key)=>{
                  console.log(item)
                  const {title,price, image, company,productColor:color, cartId, amount}= item
                  console.log("num1   "+amount)
                  return <CartItem key={key} id={cartId} title={title} image={image} color={color} amount={amount} company={company} price={price} />
                })
              }
            </div>
            <OrderAmount/>
        </div>
      </div>
    )
  }
}

export default Cart
