import React, { useState, useEffect, useReducer } from 'react'
import { fetchData } from '../../utils/fetch'
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error()
  }
}
// 找保单，问保单的现金价值
// 银行业保险业监督协会
export const useFetchApi = (initialSearch: string, initailData: { hits: any[] }) => {
  const [search, setSearch] = useState(initialSearch)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    data: initailData,
    isError: false
  })
  useEffect(() => {
    const fetchData1 = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const data = await fetchData({ id: search })
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        dispatch(({ type: 'FETCH_ERROR' }))
      }
    }
    fetchData1()
  }, [search])
  const doSearch = (query: string) => {
    setSearch(query)
  }
  return { ...state, doSearch }
}
// export const useFetchApi: () => { data: any, isLoading: boolean, doSearch: (query: string) => void } = () => {
//   const [data, setData] = useState({ hits: [] })
//   const [isLoading, setIsLoading] = useState(false)
//   const [search, setSearch] = useState('1')
//   useEffect(() => {
//     const fetchData1 = async () => {
//       setIsLoading(true)
//       const data = await fetchData({ id: search })
//       setData(data)
//       setIsLoading(false)
//     }
//     fetchData1()
//   }, [search])
//   const doSearch = (query: string) => {
//     setSearch(query)
//   }
//   return { data, isLoading, doSearch }
// }