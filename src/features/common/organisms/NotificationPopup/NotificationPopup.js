import React, {useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {useLatest} from 'react-use'
import {useSubscription} from '@apollo/client'
import {EVENT_UPDATED} from 'models/event'
import {useModal} from '../../hooks'
import {EventCard} from '../../molecules'

export const NotificationPopup = () => {
  const {data} = useSubscription(EVENT_UPDATED)

  const {open} = useModal('notifications')
  const openRef = useLatest(open)

  useEffect(() => {
    if (data && data.eventUpdated && !data.eventUpdated.deleted)
      toast(<EventCard publication={data.eventUpdated} mini />, {
        type: 'dark',
        onClick: openRef.current,
      })
  }, [data, openRef])

  return <ToastContainer position="bottom-left" autoClose={false} />
}
