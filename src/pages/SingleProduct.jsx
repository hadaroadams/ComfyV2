import React, { useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { ApiInstance, currencyFormater, getNumberOfItems } from '../utilities/Index'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/CartSlice'


export const loader =async({params})=>{
    const urls = `/products/${params.id}`
    console.log(params)
    const {data} = await ApiInstance(urls)
    return {data}
}


const SingleProduct = () => {
    const dispatch = useDispatch()
    const {data}=useLoaderData().data
    console.log(data)
    const {title,colors,company,image,price,description} = data.attributes
    const {id} = data
    const [color,setColor] = useState(colors[0])
    const [amount,setAmount]= useState(1)
    const options = getNumberOfItems(12)
    console.log(data)

    const  capitalizeFirstLetter=(str)=>{
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const cartProduct ={
        cartId:data.id+color,
        image,
        title,
        price,
        productColor:color,
        amount,
        company,
        productId:id

    }

    console.log(cartProduct)
    const addItems=()=>{
    
    }
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
                <img className='h-full w-10/12 rounded-lg' src={image}  alt="" />
            </div>
            <div className='flex-[0.5]'>
                <div className='text-[#394E6A]'>
                    <h1 className='text-5xl font-semibold text-[#394E6A]'>{capitalizeFirstLetter(title)}</h1>
                    <h2 className='text-3xl mt-3 font-semibold text-[#C7C9D1]'>{company}</h2>
                    <p className='text-xl mt-3 mb-3 text-[#394E6A]'>{currencyFormater(price)}</p>
                    <p>{description}</p>
                </div>
                <div className='mt-10'>
                    <h3>Colors</h3>
                    <button onClick={()=>{setColor(colors[0])}} className={`w-7 h-7 bg-[${colors[0]}] rounded-full mr-3 ${colors[0]==color && 'border-blue-950 border-2'}`} style={{backgroundColor:colors[0]}}></button>
                    <button onClick={()=>{setColor(colors[1])}} className={`w-7 h-7 bg-[${colors[1]}] rounded-full ${colors[1]==color && 'border-blue-950 border-2'} `} style={{backgroundColor:colors[1]}} ></button>
                </div>
                <div className='flex flex-col space-y-3 my-4 text-[#394E6A]'>
                    <label htmlFor="">Amount</label>
                    <select onChange={(e)=>setAmount(parseInt(e.target.value))} className="select w-full max-w-xs bg-transparent border-black focus:outline-3 focus:outline focus:outline-red">
                        {
                            options.map((item)=>{

                                return item
                            })
                        }
                    </select>
                </div>
                <div>
                    <button onClick={()=>{dispatch(addItem(cartProduct))}} className="btn bg-[#3B3187] hover:bg-[#272060] border-none">ADD TO BAG</button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default SingleProduct
