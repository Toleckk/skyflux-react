import {useHistory, useLocation} from 'react-router'
import {useCallback} from 'react'
import {parse, stringify} from 'query-string'

export const useModal = name => {
  const {pathname, search} = useLocation()
  const history = useHistory()
  const params = parse(search)

  const updateState = useCallback(
    data =>
      history.push({
        pathname,
        search: stringify({
          ...params,
          [name]: data !== undefined && typeof data !== 'string' ? '1' : data,
        }),
      }),
    [history, name, params, pathname],
  )

  const isOpened = !!params[name]

  const open = useCallback((data = '1') => updateState(data), [updateState])

  const close = useCallback(() => updateState(), [updateState])

  const toggle = useCallback(isOpened ? close : open, [isOpened, close, open])

  return {
    open,
    toggle,
    close,
    isOpened,
  }
}
