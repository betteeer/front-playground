
import * as React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
export interface HelloProps { compiler: string; framework: string }

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <Button type="primary">2</Button>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
    </div>
  )
}
