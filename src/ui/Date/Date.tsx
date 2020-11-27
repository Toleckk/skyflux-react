import React, {useMemo} from 'react'
import {Tip} from '@skyflux/react/typography'

export type DateProps = {
  date: string | Date
  time?: boolean
}

export const Date: React.FC<DateProps> = ({date, time = true}) => {
  const dateStr = useMemo(
    () =>
      (date instanceof window.Date ? date : new window.Date(date))[
        time ? 'toLocaleString' : 'toLocaleDateString'
      ](),
    [date, time],
  )

  return <Tip>{dateStr}</Tip>
}
