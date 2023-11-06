import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigation, useParams, useSearchParams } from 'react-router-dom'

const NavLinks = () => {
    const {user}= useSelector((state)=>state.user)
    const {pathname} = useLocation()
    const links = [
        {id:1, url:'', text:'home'},
        {id:2, url:'about', text:'about'},
        {id:3, url:'products', text:'products'},
        {id:4, url:'cart', text:'cart'},
        {id:5, url:'checkout', text:"checkout"},
        {id:6, url:'order', text:"order"},
    ]
  return (
    <>
    {links.map((item)=>{
            const {id,url,text}= item
        if((url === 'checkout'||url === 'order')&& !user) return null

        return( 
            <li key={id} className= {pathname.slice(1)===url?"bg-[#021431] rounded-lg text-white":''}>
                <Link to={url}>{text.slice(0,1).toLocaleUpperCase() + text.slice(1)}</Link> 
            </li> 
        )
        })
    }
    </>
  )
}
export default NavLinks
