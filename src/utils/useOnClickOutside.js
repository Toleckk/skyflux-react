import {useEffect, useRef} from 'react'
import {useLatest} from 'react-use'

export const useOnClickOutside = (
  f,
  {container = document.getElementById('root')} = {},
) => {
  const fRef = useLatest(f)

  const targetRef = useRef()

  useEffect(() => {
    const listener = e => {
      if (targetRef.current && !targetRef.current.contains?.(e.target))
        return fRef.current?.()
    }

    container.addEventListener('click', listener)

    return () => container.removeEventListener('click', listener)
  }, [container, targetRef, fRef])

  return targetRef
}
