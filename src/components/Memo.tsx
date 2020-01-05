import React, { useState, useMemo } from 'react'
import { Button, Input } from 'antd'
//无论是修改count还是val，都会重新渲染触发计算
//但是计算只依赖于count的值，在val改变时没必要进行计算
export function WithoutMemo() {
  const [count, setCount] = useState(1)
  const [val, setVal] = useState('')
  const expensive = () => {
    console.log('computing')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }
  return (
    <div>
      <p>without memo</p>
      <h4>{count}-{val}-{expensive()}</h4>
      <div>
        <Button onClick={() => setCount(count + 1)}>点击+1，当前{count}</Button>
        <Input value={val} onChange={(e: any) => setVal(e.target.value)} />
      </div>
    </div>
  )
}
//使用useMemo执行昂贵的计算，将count作为依赖传入，只会在count改变时触发计算执行
//在修改val时，返回上一次缓存的值
export function WithMemo() {
  const [count, setCount] = useState(1)
  const [val, setVal] = useState('')
  const expensive = useMemo(() => {
    console.log('computing')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])
  return (
    <div>
      <p>with memo</p>
      <h4>{count}-{val}-{expensive}</h4>
      <div>
        <Button onClick={() => setCount(count + 1)}>点击+1，当前{count}</Button>
        <Input value={val} onChange={(e: any) => setVal(e.target.value)} />
      </div>
    </div>
  )
}