import React, {useEffect, useMemo, useRef} from 'react'
import PropTypes from 'prop-types'
import {useIntersection, useLatest} from 'react-use'

export const Tracker = ({
  onIntersect,
  threshold,
  direction,
  root,
  ...props
}) => {
  const onIntersectRef = useLatest(onIntersect)

  const style = useMemo(() => computeStyles({direction, threshold}), [
    direction,
    threshold,
  ])

  const ref = useRef()
  const intersection = useIntersection(ref, {})

  useEffect(() => {
    if (intersection && intersection.isIntersecting)
      return void onIntersectRef.current?.()
  }, [intersection, onIntersectRef])

  return <div style={style} ref={ref} {...props} />
}

Tracker.propTypes = {
  onIntersect: PropTypes.func,
  threshold: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  root: PropTypes.elementType,
}

const computeStyles = ({direction, threshold}) => ({
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
