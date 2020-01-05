import React, { useState, useCallback } from 'react'
import { Button, Input } from 'antd'
const set = new Set()

export default function Callback() {
  const [count, setCount] = useState(1)
  const [val, setVal] = useState('')
  const callback = useCallback(() => {
    console.log(count)
  }, [count])
  // const callback = () => {
  //   console.log(count)
  // }
  set.add(callback)
  return (
    <div>
      <p>Callback</p>
      <div>当前count的值：{count}</div>
      <div>当前set的长度：{set.size}</div>
      <div>
        <Button onClick={() => setCount(count + 1)}>点击+1</Button>
        <Input value={val} onChange={(e) => setVal(e.target.value)} />
      </div>
    </div>
  )
}