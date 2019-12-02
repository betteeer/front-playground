import * as React from 'react'
import { Button } from 'antd'
export interface HelloProps { compiler: string; framework: string }

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <Button type="primary">a</Button>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
    </div>
  )
}
