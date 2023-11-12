import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import { ApiInstance } from '../utilities/Index'
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'

const Landing = () => {
    const data = useLoaderData()
    console.log(data)
    const load = useNavigation()
    const isPageLoading = load.state=="loading"
    // console.log(isPageLoading)
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
export const Loader =(queryClient)=>
async()=>{
    const url = '/products?featured=true';
  // console.log(queryClient.ensure)
  const {data}=await queryClient.ensureQueryData({queryKey:['featuredProduct'],queryFn:()=> ApiInstance(url)})
  // console.log(data)
        // /const data = await ApiInstance(url)
        return data.data
}

export default Landing
