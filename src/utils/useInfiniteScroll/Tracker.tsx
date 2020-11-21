import React, {useEffect, useMemo, useRef} from 'react'
import {useIntersection, useLatest} from 'react-use'

export type TrackerDirection = 'up' | 'down' | 'left' | 'right'

export type TrackerProps = {
  onIntersect?: () => unknown
  threshold: string
  direction: TrackerDirection
}

export const Tracker: React.FC<TrackerProps> = ({
  onIntersect,
  threshold,
  direction,
  ...props
}) => {
  const onIntersectRef = useLatest(onIntersect)

  const style = useMemo(() => computeStyles(direction, threshold), [
    direction,
    threshold,
  ])

  const ref = useRef<HTMLDivElement | null>(null)
  const intersection = useIntersection(ref, {})

  useEffect(() => {
    if (intersection && intersection.isIntersecting && onIntersectRef.current)
      onIntersectRef.current()
  }, [intersection, onIntersectRef])

  return <div style={style} ref={ref} {...props} />
}

const computeStyles = (
  direction: TrackerDirection,
  threshold: string,
): React.CSSProperties => ({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: /(up)|(down)/.test(direction) ? '100%' : threshold,
  height: /(up)|(down)/.test(direction) ? threshold : '100%',
  ...(direction === 'up' ? {top: 0, left: 0} : {}),
  ...(direction === 'down' ? {bottom: 0, left: 0} : {}),
  ...(direction === 'left' ? {left: 0, top: 0} : {}),
  ...(direction === 'right' ? {right: 0, top: 0} : {}),
})
