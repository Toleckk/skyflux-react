import {useHistory, useLocation} from 'react-router'
import {useCallback} from 'react'

export const useNotificationsDisplay = () => {
  const {pathname} = useLocation()
  const history = useHistory()

  const open = useCallback(
    () => history.push(pathname.replace(/^\/$/, '') + '/notifications'),
    [pathname, history],
  )

  const close = useCallback(
    () => history.push(pathname.replace('/notifications', '')),
    [pathname, history],
  )

  const isOpened = !!pathname.match('/notifications')

  const toggle = useCallback(isOpened ? close : open, [isOpened, close, open])

  return {
    open,
    toggle,
    close,
    isOpened,
  }
}
