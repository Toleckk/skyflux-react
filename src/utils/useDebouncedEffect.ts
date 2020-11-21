import {useEffect, useState} from 'react'
import {useLatest} from 'react-use'

export type UseDebouncedEffect = (
  fn: (...args: unknown[]) => unknown,
  deps: unknown[],
  delay: number,
) => boolean

export const useDebouncedEffect: UseDebouncedEffect = (fn, deps, delay) => {
  const fnRef = useLatest(fn)
  const delayRef = useLatest(delay)

  const [timeout, setTimeoutState] = useState(0)
  const [shouldCall, setShouldCall] = useState(true)

  useEffect(() => {
    if (!timeout && shouldCall) {
      fnRef.current()
      setShouldCall(false)
      setTimeoutState(
        window.setTimeout(() => setTimeoutState(0), delayRef.current),
      )
    }
  }, [fnRef, delayRef, timeout, setTimeoutState, shouldCall])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShouldCall(true), [...deps, setShouldCall])

  return shouldCall
}
