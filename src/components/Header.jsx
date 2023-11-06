import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/UserSlice'
import { clearCart } from '../features/CartSlice'
import NavLinks from './NavLinks'

const Header = () => {
    const [isdarkMode,setIsDarkMode] = useState(false)
    const {cartItems,numItemsInCart}= useSelector((state)=> state.cart.value)
    console.log(numItemsInCart)
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const {user}= useSelector((state)=>state.user)
    const dispatch= useDispatch()
    // console.log(data)
    const colorTheme =()=>{
        setIsDarkMode((e)=>{
         return   !e
        })
        if(!isdarkMode){
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark')
        }
    }
    const handlelogout=()=>{
        dispatch(logoutUser())
        dispatch(clearCart())
        navigate('/')
    }
  return (
    <>
        <header className='bg-[#021431] dark:bg-[#414558] text-xs py-2 flex justify-center space-x-5 md:text-base items-center md:justify-end px-20'>
            {
                user?(
                    <>
                    <p>
                        Hello, {user.username} 
                    </p>
                    <button onClick={handlelogout} className=' border-blue-600 border-2 p-1 px-3 rounded-full' >
                        LOGOUT
                    </button>
                    </>
                ):(
                    <>
                        <Link to='/Login' className=' hover:underline'>Sign in/Guest</Link>
                        <Link to='/Signup' className='hover:underline'>Create Account</Link>
                    </>
                )
            }
        </header>
        <nav className='bg-[#F0F6FF] dark:bg-[#181920] px-5 md:px-20 py-1 flex items-center justify-between text-[#394E6A]'>
            <div className="dropdown dropdown-bottom md:hidden ">
                <label tabIndex={0} className="btn m-1 bg-transparent  col border-none hover:bg-[#CBD5E1] text-[#394E6A] dark:text-[#F0F6FF]"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
                <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 shadow rounded-box w-52 bg-[#F0F6FF] dark:bg-[#181920] dark:text-[#F0F6FF] mt-1">
                    <NavLinks />
                </ul>
            </div>
            <div className='hidden md:block'>
                <Link to='/' className="btn btn-info text-4xl bg-[#057AFF] dark:bg-[#FF7AC6] text-[#F0F6FF] border-none">C</Link>
            </div>
                <ul className="menu  menu-horizontal bg-[transparent]  hidden md:flex dark:text-[#F0F6FF] ">
                   <NavLinks/>
                </ul>
            <div>
                <label className="swap swap-rotate dark:text-[#F8F8F2]">
                    <input type="checkbox" value onClick={colorTheme}/>
                    <svg className="swap-on fill-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <svg className="swap-off fill-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                </label>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary top-[6px] left-4 bg-[#0D7EFF] dark:bg-[#FF7AC6] border-none">{numItemsInCart}</span> 
                    <Link to='cart' className="btn rounded-full bg-transparent hover:bg-[#CBD5E1] border-none text-[#394E6A] dark:text-[#F8F8F2] "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
