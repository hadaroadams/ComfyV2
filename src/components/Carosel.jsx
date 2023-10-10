import React from 'react'

const Carosel = () => {
  return (
    <div className="carousel carousel-end rounded-box md:flex-[0.5] h-[80vh] bg-[#021431] dark:bg-[#414558] p-5 space-x-3 hidden md:flex">
            <div className="carousel-item h-full w-[300px]">
                <img className='h-full rounded-box w-full' src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="Drink" />
            </div> 
            <div className="carousel-item h-full w-[300px]">
                <img className='h-full rounded-box w-full' src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" alt="Drink" />
            </div> 
            <div className="carousel-item h-full w-[300px]">
                <img className='h-full rounded-box w-full'  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" alt="Drink" />
            </div> 
            <div className="carousel-item h-full w-[300px] pr-5">
                <img className='h-full rounded-box w-full'  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" alt="Drink" />
            </div> 
    </div>
  )
}

export default Carosel
