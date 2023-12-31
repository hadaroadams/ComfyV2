import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const ComplexPagination = () => {
    const {page,pageCount}= useLoaderData().response.data.meta.pagination
    console.log(page)
    const navigate = useNavigate()
    const {pathname,search}= useLocation()

    const handlePageChange=(pageNumber)=>{
        const searchParam = new URLSearchParams(search);
        searchParam.set("page",pageNumber)
        console.log(searchParam.toString())
        navigate(`${pathname}?${searchParam.toString()}`)
    }


  const addPageButton = ({pageNumber,activeclass})=>{
    return(
      <button onClick={()=>{handlePageChange(pageNumber)}} className={`${activeclass? 'bg-blue-500 dark:bg-[#FF7AC6]':'bg-slate-300 dark:bg-[#181920]'} join-item btn dark:hover:bg-[black]  rounded-none  border-none `}>
        {pageNumber}
      </button>
    )
  }
  const renderButton = () => {
    const buttons=[]
      buttons.push(addPageButton({pageNumber:1,activeclass:page===1}))
      if(page==2){
      buttons.push(addPageButton({pageNumber:page,activeclass:page===2}))

      }
      if(page>2){
        buttons.push(<button className='join-item btn bg-[#E2E8F4] dark:bg-[#181920] border-none rounded-none '>...</button>)
      }
      if(page>2 && page<pageCount-1){
        buttons.push(addPageButton({pageNumber:page,activeclass:true}))
      }
      if(page<pageCount-1){
        buttons.push(<button className='join-item btn bg-[#E2E8F4] dark:bg-[#181920] border-none rounded-none '>...</button>)
      }
      if(page===pageCount-1){
        buttons.push(addPageButton({pageNumber:page,activeclass:true}))

      }
      buttons.push(addPageButton({pageNumber:pageCount,activeclass:pageCount==page}))
    return buttons
  }
    
    if (pageCount<2) return null
  return (
    <div className='flex justify-end mt-10 '>
      <button
      className={'join-item btn bg-[#E2E8F4] dark:bg-[#181920] dark:hover:bg-[black] border-none rounded-l-lg rounded-r-none'}
      onClick={()=>{
        let prev = page-1
        if(page===1){
          prev = pageCount
        }
        handlePageChange(prev)
        }}
       >prev</button>

      {
        renderButton()
      }
      <button className={'join-item btn bg-[#E2E8F4] dark:bg-[#181920] dark:hover:bg-[black] border-none rounded-r-lg rounded-l-none '}
      onClick={()=>{
        let next = page+1
        if(page===pageCount){
          next = 1
        }
        handlePageChange(next)
      }
      }
      >next</button>

    </div>
  )
}

export default ComplexPagination
