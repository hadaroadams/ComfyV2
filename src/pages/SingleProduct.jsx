import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getNumberOfItems } from '../utilities/Index'


const SingleProduct = () => {
    const {id}= useParams()
    const options = getNumberOfItems(12)
    console.log(id)
  return (
    <section className='mt-24 px-8'>
        <div>
            <ul className='flex space-x-1 text-lg mb-6'>
                <li><Link to='/'>Home</Link></li>
                <li className=' before:content-[">"] before:mr-1'><Link to='/Products'>product</Link></li>
            </ul>
        </div>
        <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row'>
            <div className='h-[410px] w-full lg:flex-[0.5] '>
                <img className='h-full w-10/12 rounded-lg' src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"  alt="" />
            </div>
            <div className='flex-[0.5]'>
                <div className='text-[#394E6A]'>
                    <h1 className='text-5xl font-semibold text-[#394E6A]'>Avant-Garde Lamp</h1>
                    <h2 className='text-3xl mt-3 font-semibold text-[#C7C9D1]'>Modenza</h2>
                    <p className='text-xl mt-3 mb-3 text-[#394E6A]'>$179.99</p>
                    <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                </div>
                <div className='mt-10'>
                    <h3>Colors</h3>
                    <button className='w-7 h-7 bg-green-400 rounded-full mr-3 focus:outline-blue-800 focus:outline-2 focus:outline'></button>
                    <button className='w-7 h-7 bg-red-400 rounded-full focus:outline-blue-800 focus:outline-2 focus:outline'></button>
                </div>
                <div className='flex flex-col space-y-3 my-4 text-[#394E6A]'>
                    <label htmlFor="">Amount</label>
                    <select className="select w-full max-w-xs bg-transparent border-black focus:outline-3 focus:outline focus:outline-red">
                        {
                            options.map((item)=>{
                                return item
                            })
                        }
                    </select>
                </div>
                <div>
                    <button onClick={()=>{console.log('Add to Basket')}} className="btn bg-[#3B3187] hover:bg-[#272060] border-none">ADD TO BAG</button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default SingleProduct
