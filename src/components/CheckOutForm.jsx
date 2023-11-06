import React from 'react'
import { Form } from 'react-router-dom'
import FormInput from './FormInput'



 
const CheckOutForm = () => {
  return (
    <>
        <div className=' md:flex-[0.5] mb-4'>
        <h3 className='text-lg my-5 font-bold text-[#394E6A]'>Shipping Information</h3>
         <Form method='POST' className='space-y-4'>
            <FormInput type="text" name='name' label="First Name"  /> 
            <FormInput type="text" name='address' label="Address"  /> 
            <button className='btn bg-blue-600 border-none w-full hover:bg-blue-700 text-white'>{'place your order'.toLocaleUpperCase()}</button>
         </Form>
         
        </div>
    </>
  )
}

export default CheckOutForm
