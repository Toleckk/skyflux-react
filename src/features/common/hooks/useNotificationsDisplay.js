import {useHistory, useLocation} from 'react-router'
import {useCallback} from 'react'
import {parse, stringify} from 'query-string'

export const useNotificationsDisplay = () => {
  const {pathname, search} = useLocation()
  const history = useHistory()
  const params = parse(search)

  const isOpened = params.notifications === '1'

  const open = useCallback(
    () =>
      history.push({
        pathname,
        search: stringify({...params, notifications: 1}),
      }),
    [history, pathname, params],
  )

  const close = useCallback(
    () =>
      history.push({
        pathname,
        search: stringify({...params, notifications: undefined}),
      }),
    [history, pathname, params],
  )

  const toggle = useCallback(isOpened ? close : open, [isOpened, close, open])

  return {
    open,
    toggle,
    close,
    isOpened,
  }
}
