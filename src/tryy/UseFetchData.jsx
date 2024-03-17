import React, { useEffect, useState } from 'react'

export const useFetchData = (apiUrl) => {
    const [result, setResult]= useState(null)
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(null)
  
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response =await axios.get(apiUrl)
                setResult(response.data)
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[apiUrl])
 return {result, loading, error}
}
