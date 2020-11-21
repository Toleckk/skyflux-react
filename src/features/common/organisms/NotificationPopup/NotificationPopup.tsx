import React, {useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {useLatest} from 'react-use'
import {useSubscription} from '@apollo/client'
import {useModal} from 'features/shared/hooks'
import {EventCard} from '../../molecules'
import {EVENT_UPDATED} from '../../graphql'

export const NotificationPopup: React.FC = () => {
  const {data} = useSubscription(EVENT_UPDATED)

  const {open} = useModal('notifications')
  const openRef = useLatest(open)

  useEffect(() => {
    if (data && data.eventUpdated && !('deleted' in data.eventUpdated))
      toast(<EventCard event={data.eventUpdated} mini />, {
        type: 'dark',
        onClick: openRef.current,
      })
  }, [data, openRef])

  return (
    <ToastContainer
      position="bottom-left"
      autoClose={false}
      bodyStyle={{overflow: 'hidden'}}
    />
  )
}
