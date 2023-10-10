import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import { ApiInstance } from '../utilities/Index'
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'

const Landing = () => {
    const data = useLoaderData()
    const load = useNavigation()
    const isPageLoading = load.state=="loading"
    console.log(isPageLoading)
  return (
    <div>
      {
        isPageLoading?<Loading/>:
        <>
          <Hero/>
          <Features/>
        </>
      }
    </div>
  )
}
export const Loader =async(e)=>{

    const url = '/products?featured=true';
        const data = await ApiInstance(url)
        return data.data.data
}

export default Landing
