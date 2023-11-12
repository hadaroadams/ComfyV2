import React from 'react'
import { Link } from 'react-router-dom'
import { currencyFormater } from '../utilities/Index'

const ProductItem = ({image,title,compnay,price,id, layOut}) => {
  return (
    <>
    {
      layOut?(
          <article className="card card-compact  bg-transparent shadow-xl hover:shadow-2xl duration-150 w-full  my-4">
              <figure className='h-[200px]'><img className='h-full w-full object-cover' src={image} alt="Shoes" /></figure>
              <div className="card-body text-[#394E6A] dark:text-[white] ">
                  <h2 className="card-title text-center w-full">{title}!</h2>
                  <p>{compnay}</p>
                  <h3>{currencyFormater(price)}</h3>
                  <div className="card-actions justify-end">
                      <Link to={`/products/${id}`} className="btn  bg-[#0069E0] dark:text-[white] dark:bg-[#FF7AC6] border-none">Details</Link>
                  </div>
              </div>
          </article>

      ):(
      <article className=" p-4 flex md:flex-row  card  card-compact space-y-4  bg-transparent shadow-xl hover:shadow-2xl duration-150 w-full justify-between my-4">
              <figure className='h-[100px] w-[100px] rounded-b-xl'><img className='h-full w-full object-cover' src={image} alt="Shoes" /></figure>
              <div className=" text-[#394E6A] dark:text-[white] ">
                  <h2 className="card-title text-center w-full">{title}!</h2>
                  <p>{compnay}</p>
                  <h3>{currencyFormater(price)}</h3>
              </div>
                <div className="flex-[0.8] flex justify-end">
                    <Link to={`/products/${id}`} className="btn  bg-[#0069E0] dark:bg-[#FF7AC6] dark:text-[white] border-none">Details</Link>
                </div>
          </article>
          )
    }
    </>
  )
}

export default ProductItem
