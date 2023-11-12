import React from 'react'
import FormInput from './FormInput'
import FormOption from './FormOption'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'
import { Form, useLoaderData } from 'react-router-dom'
const Filter = () => {
  const {data} = useLoaderData()
  const {meta} = data
  const {companies,categories,pagination} = meta


  return (
    <Form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4 bg-[#F0F6FF] dark:text-[white] dark:bg-[#181920] p-10 mt-20 rounded-lg'>
      
        <FormInput name="search" label='Search Product' placeholder='search products'/>
        <FormOption name="category" options={['all','Tables','Chairs','Kids','Sofas','Bed']} label={'Select Category'} />
        <FormOption opt name="company" options={['all','Mondenzo','Luxora','Artifex','Comfora','Bed']} label={'Select Company'} />
        <FormOption opt name="order" options={['a-z','z-a','high','low']} label={'Sort By'} />
        <FormRange/>
        <FormCheckBox/>
        <button type='submit' className="btn btn-active w-full bg-[#0069E0] hover:bg-[#024897] border-none self-center">SEARCH</button>
        <button className="btn btn-active w-full bg-[#C149AD] hover:bg-[#ad1994] border-none self-center">RESET</button>
    </Form>
  )
}

export default Filter
