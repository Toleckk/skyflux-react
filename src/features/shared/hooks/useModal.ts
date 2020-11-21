import {useHistory, useLocation} from 'react-router'
import {useCallback} from 'react'
import {parse, stringify} from 'query-string'

export type UseModalResult = {
  open: (payload?: string | unknown) => void
  toggle: (payload?: string | unknown) => void
  close: () => void
  isOpened: boolean
  payload: string | string[] | null
}

export const useModal = (name: string): UseModalResult => {
  const {pathname, search} = useLocation()
  const history = useHistory()
  const params = parse(search)

  const updateState = useCallback(
    (data?: string | unknown) =>
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

  const toggle = useCallback(
    (data?: string | unknown) => (isOpened ? close() : open(data)),
    [isOpened, close, open],
  )

  return {
    open,
    toggle,
    close,
    isOpened,
    payload: params[name],
  }
}
