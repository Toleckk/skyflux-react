import React, {useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {eventAdded} from 'models/event'
import {useLatest} from 'react-use'
import {useModal, useMySubscription} from '../../hooks'
import {EventCard} from '../../molecules'

export const NotificationPopup = () => {
  const {data} = useMySubscription(eventAdded())

  const {open} = useModal('notifications')
  const openRef = useLatest(open)

  useEffect(() => {
    if (data)
      toast(<EventCard publication={data.eventAdded} mini />, {
        type: 'dark',
        onClick: openRef.current,
      })
  }, [data, openRef])

  return <ToastContainer position="bottom-left" autoClose={false} />
}
