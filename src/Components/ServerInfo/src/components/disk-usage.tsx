import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { FetchStore } from '../../../Fetch/src/stores'
import { gettext } from '../../../Language/src'
import { ProgressBar } from '../../../ProgressBar/src/components'
import { ServerInfoStore } from '../stores'

export const ServerDiskUsage: FC = observer(() => {
  const { ID, conf } = ServerInfoStore
  const { isLoading, data } = FetchStore
  let {
    diskUsage: { value, max },
  } = conf
  if (!isLoading) {
    value = data?.[ID]?.diskUsage?.value
    max = data?.[ID]?.diskUsage?.max
  }
  if (!value || !max) {
    return <>{gettext('Unavailable')}</>
  }
  return <ProgressBar value={value} max={max} isCapacity />
})
