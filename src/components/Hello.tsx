
import * as React from 'react'
import { Button } from 'antd'
import Example from './Example'
import FetchDataDemo from './FetchDataDemo'
import UseEffectDemo from './UseEffectDemo'
import 'antd/dist/antd.css'
export interface HelloProps { compiler: string; framework: string }

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <Example textColor={'#F00'} />
      {/* <FetchDataDemo /> */}
      <UseEffectDemo />
    </div>
  )
}
