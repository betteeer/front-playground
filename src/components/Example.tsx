import React, { useState, useEffect, useRef } from 'react'
import { Button, Input } from 'antd'
interface Props {
  textColor: string
}
function Example({ textColor }: Props) {
  const [count, setCount] = useState(0)
  const inputEl = useRef(null)
  useEffect(() => {
    document.title = `click ${count}`
  })
  useEffect(() => {
    inputEl.current.focus()
  })
  return (
    <div>
      <p>{count}</p>
      <Button type="primary" onClick={() => {
        setCount(count + 1)
      }}>click</Button>
      <Input ref={inputEl} value={count} onChange={e => setCount(Number(e.target.value))} />
    </div>
  )
}
export default Example