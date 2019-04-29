import { Spin } from 'antd'
import * as React from 'react'
import './Loading.less'
const Loading = () => (
  <div className="spin">
    <Spin 
      size="large" 
      delay="500"
    />
  </div>
)

export default Loading