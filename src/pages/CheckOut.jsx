import React from 'react'
import CartHeader from '../components/CartHeader'
import CheckOutForm from '../components/CheckOutForm'
import CartTotal from '../components/CartTotal'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'
import { ApiInstance, currencyFormater } from '../utilities/Index'
import { clearCart } from '../features/CartSlice'


export  const loader =(store)=>async()=>{
  const {user} = store.getState().user
  console.log(user)
  if(!user){
    toast("You must be loaded In to check out",{
      type:'warning',
      position:"top-center"
    })
    return redirect("/login")
  }
    return null
}

export const action =(store)=>
  async({request})=>{
    const {user,cart} = store.getState()
    const {token}=user.user
     console.log(token)

    const {cartTotal,numItemsInCart,cartItems}=cart.value
    const formData = await request.formData()
    const { name,address } = Object.fromEntries(formData)
    console.log(name)
    console.log(user,cart)
    
    const info ={
      name,
      address,
      chargeTotal:cartTotal,
      orderTotal:currencyFormater(cartTotal),
      cartItems,
      numItemsInCart,

    }
    console.log(store)


    try{
      
      const response = await ApiInstance.post('/orders',{data:info},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      toast("Order placed successfully",{
        type:"success",
        position:"top-center"
      })
      
      store.dispatch(clearCart())
      console.log(response)
      return redirect('/order')
    
    }catch(error){
      const message=error.response.data.error.message
       toast(message,{
        type:"error",
        position:"top-center"
      })
    }
    return null
  }

const CheckOut = () => {
    const {numItemsInCart}= useSelector((state)=> state.cart.value)
   if(numItemsInCart){
    return (
    
    <div className='mx-14'>
      <CartHeader message={'Place Your Order'}/>
      <div className='flex flex-col md:flex-row md:space-x-10'>
        <CheckOutForm/>
        <CartTotal/>
      </div>
    </div>
  )
  }else{
    return( 
      <div className='mx-14'>
        <CartHeader message={'Empty Cart'}/>
      </div>
  
  )}
 
}

export default CheckOut
