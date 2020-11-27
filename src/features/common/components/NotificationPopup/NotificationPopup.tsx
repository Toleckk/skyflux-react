import React, {useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {useLatest} from 'react-use'
import {useSubscription} from '@apollo/client'
import {useMediaScreens, useModal} from '@skyflux/react/features/shared/hooks'
import {EVENT_UPDATED} from '../../graphql'
import {EventCard} from '..'

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

  const {isDesktop} = useMediaScreens()

  return (
    <ToastContainer
      position={isDesktop ? 'bottom-left' : 'top-left'}
      autoClose={false}
      bodyStyle={{overflow: 'hidden'}}
    />
  )
}
