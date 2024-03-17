import React from 'react'
import { useFetchData } from './UseFetchData'

const FetchTry = () => {
const api="localhost"
const {result, loading, error}=useFetchData(api)
  return (
    <div>
          {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {result && (
        <div>
          <h1>Data from API</h1>
          <p>{JSON.stringify(result, null, 2)}</p>
        </div>
      )}
    </div>
  )
}

export default FetchTry
