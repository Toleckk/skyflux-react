import {useLatest} from 'react-use'
import {useCallback, useEffect, useRef, useState} from 'react'

export const useDebouncedFunc = <
  Args extends any[],
  T extends (...args: Args) => void
>(
  f: T,
  delay: number,
): [T, boolean] => {
  const delayRef = useLatest(delay)
  const funcRef = useLatest(f)
  const argsRef = useRef<Args | null>(null)
  const [delayed, setDelayed] = useState(false)

  useEffect(() => {
    if (argsRef.current && !delayed) {
      funcRef.current(...argsRef.current)
      argsRef.current = null
    }
  }, [argsRef, delayed, funcRef])

  useEffect(() => {
    if (delayed) {
      const timeout = setTimeout(() => setDelayed(false), delayRef.current)
      return () => clearTimeout(timeout)
    }
  }, [delayed, delayRef, setDelayed])

  const fn = useCallback(
    (...args: Args): void => {
      argsRef.current = args
      setDelayed(true)
    },
    [argsRef, setDelayed],
  )

  return [fn as T, delayed && !!argsRef.current]
}
