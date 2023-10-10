import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({image,title,compnay,price,id}) => {
  return (
 
    <article className="card card-compact  bg-transparent shadow-xl hover:shadow-2xl duration-150 w-full  my-4">
        <figure className='h-[200px]'><img className='h-full w-full object-cover' src={image} alt="Shoes" /></figure>
        <div className="card-body text-[#394E6A] ">
            <h2 className="card-title text-center w-full">{title}!</h2>
            <p>{compnay}</p>
            <h3>{price}</h3>
            <div className="card-actions justify-end">
                <Link to={`/Products/${id}`} className="btn  bg-[#0069E0] dark:bg-[#FF7AC6] border-none">Details</Link>
            </div>
        </div>
    </article>
  )
}

export default ProductItem
