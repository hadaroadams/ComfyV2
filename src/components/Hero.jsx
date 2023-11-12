import React from 'react'
import { Link } from 'react-router-dom'
import Carosel from './Carosel'

const Hero = () => {
  return (
    <section className='flex md:p-20 px-8 py-20'>
        <div className='md:flex[0.5] md:flex-[0.5] space-y-10'>
            <h1 className='text-4xl md:text-6xl font-bold text-[#394E6A] dark:text-[#F0F6FF]'>We are changing the way people shop</h1>
            <p className='text-[#394E6A] dark:text-[#F0F6FF]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum rem ducimus voluptates quod aut tempora, necessitatibus dolorem fuga eos et.</p>
            <Link to='/products' className='btn bg-[#0069E0] dark:bg-[#FF7AC6] text-[#F0F6FF] border-none'>Our Product</Link>
        </div>
        <Carosel/>
    </section>
  )
}

export default Hero
