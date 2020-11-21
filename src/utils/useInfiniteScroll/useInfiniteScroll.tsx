import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import noop from 'noop6'
import ReactDOM from 'react-dom'
import {Tracker, TrackerDirection} from './Tracker'

export type UseInfiniteScrollOptions = {
  fetchMore?: () => unknown
  loading?: boolean
  hasMore?: boolean
  threshold?: string
  direction?: TrackerDirection
}

export const useInfiniteScroll = <T extends HTMLElement = HTMLUListElement>({
  fetchMore = noop,
  loading = false,
  hasMore = false,
  threshold = '100px',
  direction = 'down',
}: UseInfiniteScrollOptions): React.RefCallback<T> => {
  const element = useRef<T | null>(null)
  const [registered, setRegistered] = useState(false)

  const containerRef = useCallback(
    el => {
      element.current = el
      setRegistered(true)
    },
    [element],
  )

  const onIntersect = useCallback(() => !loading && hasMore && fetchMore(), [
    fetchMore,
    loading,
    hasMore,
  ])

  const tracker = useMemo(
    () => (
      <Tracker
        direction={direction}
        threshold={threshold}
        onIntersect={onIntersect}
      />
    ),
    [direction, threshold, onIntersect],
  )

  const [container, setContainer] = useState<HTMLElement | null>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const {current} = element
    if (
      current &&
      !current.querySelector('div[data-tracker=true]:last-child')
    ) {
      for (const e of current.querySelectorAll('div[data-tracker=true]'))
        e.remove()

      const newContainer = document.createElement('div')
      newContainer.style.position = 'relative'
      newContainer.setAttribute('data-tracker', 'true')
      current.appendChild(newContainer)
      setContainer(newContainer)
    }
  })

  useEffect(() => {
    const {current} = element

    if (registered && current && container) {
      ReactDOM.render(tracker, container)
    }
  }, [registered, element, tracker, container])

  return containerRef
}
