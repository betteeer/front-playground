import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetch'
import { Input, Button } from 'antd'
import { useFetchApi } from './hooks/useFetchApi';
function UseEffectDemo() {
  const [query, setQuery] = useState('1')
  const { data, isLoading, doSearch } = useFetchApi(query, { hits: [] })
  return (
    <>
      <h1>UseEffectDemo</h1>
      <Input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button loading={isLoading} onClick={() => doSearch(query)}>开始请求</Button>
      {
        isLoading ?
          <div>loading....</div> :
          <ul>
            {
              data.hits.map(v => (
                <li key={v.id}>{v.subject}</li>
              ))
            }
          </ul>
      }

    </>

  )
}
export default UseEffectDemo