import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>{error.data}</h1>
    </div>
  )
}

export default ErrorPage
