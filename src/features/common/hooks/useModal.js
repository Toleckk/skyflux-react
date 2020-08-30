import {useHistory, useLocation} from 'react-router'
import {useCallback} from 'react'
import {parse, stringify} from 'query-string'

export const useModal = name => {
  const {pathname, search} = useLocation()
  const history = useHistory()
  const params = parse(search)

  const isOpened = params[name] === '1'

  const open = useCallback(
    () =>
      history.push({
        pathname,
        search: stringify({...params, [name]: 1}),
      }),
    [history, pathname, params, name],
  )

  const close = useCallback(
    () =>
      history.push({
        pathname,
        search: stringify({...params, [name]: undefined}),
      }),
    [history, pathname, params, name],
  )

  const toggle = useCallback(isOpened ? close : open, [isOpened, close, open])

  return {
    open,
    toggle,
    close,
    isOpened,
  }
}
