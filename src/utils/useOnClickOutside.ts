import {Ref, useEffect, useRef} from 'react'
import {useLatest} from 'react-use'

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  f: () => unknown,
  {
    container = document.getElementById('root'),
  }: {container?: HTMLElement | null} = {},
): Ref<T> => {
  const fRef = useLatest(f)

  const targetRef = useRef<T>(null)

  useEffect(() => {
    const listener: EventListener = (e): unknown => {
      if (targetRef.current && !targetRef.current.contains?.(e.target as Node))
        return fRef.current?.()
    }

    container?.addEventListener('click', listener)

    return () => container?.removeEventListener('click', listener)
  }, [container, targetRef, fRef])

  return targetRef
}
