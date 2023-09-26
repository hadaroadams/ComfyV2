import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const url='https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'

const SingleProduct = () => {
    const fetchApi = async()=>{
        const {data} = await axios.get(url)
        console.log(data)
        return data
    }

    const data = useLoaderData()
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey:['123'],
        queryFn: fetchApi
    })
    
    console.log(query.data)
    console.log(queryClient)
  return (
    <div>
      <h1>SingleProduct Page</h1>
      <h1>{data}</h1>
    </div>
  )
}
export default SingleProduct
