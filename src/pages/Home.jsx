import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header'
import Loading from '../components/Loading'

const Home = () => {
    const {state}= useNavigation()
    const isPageLoading = state==="loading"
  return (
    <div className='bg-white dark:bg-[#272935] w-full min-h-screen pb-10'>
        <Header/>
        {
          isPageLoading?(<Loading/>):(
          <section>
              <Outlet/>
          </section>
          )
        }
    </div>
  )
}

export default Home
