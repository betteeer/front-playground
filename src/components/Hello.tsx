
import * as React from 'react'
import { Button } from 'antd'
import Example from './Example'
import FetchDataDemo from './FetchDataDemo'
import UseEffectDemo from './UseEffectDemo'
import { WithoutMemo, WithMemo } from './Memo'
import 'antd/dist/antd.css'
import Callback from './Callback';
export interface HelloProps { compiler: string; framework: string }

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <Example textColor={'#F00'} />
      {/* <FetchDataDemo /> */}
      <UseEffectDemo />
      <WithoutMemo />
      <WithMemo />
      <Callback />
    </div>
  )
}
