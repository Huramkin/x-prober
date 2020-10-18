import React, { Component } from 'react'
import Row from '@/Grid/src/components/row'
import SystemLoad from './system-load'
import CpuUsage from './cpu-usage'
import MemRealUsage from './mem-real-usage'
import MemCached from './mem-cached'
import SwapUsage from './swap-usage'
import SwapCached from './swap-cached'
import MemBuffers from './mem-buffers'

export default class ServerStatus extends Component {
  public render() {
    return (
      <Row>
        <SystemLoad />
        <CpuUsage />
        <MemRealUsage />
        <MemCached />
        <MemBuffers />
        <SwapUsage />
        <SwapCached />
      </Row>
    )
  }
}
