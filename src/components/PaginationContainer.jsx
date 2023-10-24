import React, { useRef, useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
  const {meta} = useLoaderData().data
  const {pageCount,page} = meta.pagination
    const {search,pathname} = useLocation()
    const navigation = useNavigate()
    
    const pages = Array.from({length:pageCount},(_,item)=>{
      return item + 1
    })

    const handleNavigation=(count)=>{
      const searchParams = new URLSearchParams(search)
      searchParams.set('page', count)
      navigation(`${pathname}?${searchParams}`)
    }
  return (
      <div className="join">
        <button  onClick={()=>{
          let num
          if(page>1){
          num =page-1
          handleNavigation(num)

          }else{
            handleNavigation(pageCount)
          }
        }} className={`join-item btn bg-[#E2E8F4] border-none`}>Prev</button>
        {
          pages.map((item)=>{
            return <button key={item} onClick={()=>{handleNavigation(item)}} className={`${item===page? 'bg-blue-500':'bg-slate-300'} join-item btn  border-none `}>{item}</button> 
          })
        }
        <button onClick={()=>{
          let num
          if(page<pageCount){
              num= page +1
              handleNavigation(num)
          }else{
            handleNavigation(pageCount-page)
          }
        }} className={`join-item btn bg-[#E2E8F4] border-none `}>Next</button>
    </div>  
  )
}

export default PaginationContainer
