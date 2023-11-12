import React from 'react'
import { Form } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'



 
const CheckOutForm = () => {
  return (
    <>
        <div className=' md:flex-[0.5] mb-4'>
        <h3 className='text-lg my-5 font-bold text-[#394E6A] dark:text-[white]'>Shipping Information</h3>
          <Form method='POST' className='space-y-4'>
              <FormInput type="text" name='name' label="First Name"  /> 
              <FormInput type="text" name='address' label="Address"  /> 
              <SubmitBtn text1={'place your order'.toLocaleUpperCase()} text2={'placing your order'.toLocaleUpperCase()}/>
          </Form>
        </div>
    </>
  )
}

export default CheckOutForm
