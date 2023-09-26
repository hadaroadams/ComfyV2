import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
    const id = new Date().getTime()
    console.log(id)
  return (
    <div className='bg-white dark:bg-[#272935] w-full min-h-screen'>
        <Header/>
        {/* <Outlet/> */}
    </div>
  )
}

export default Home
