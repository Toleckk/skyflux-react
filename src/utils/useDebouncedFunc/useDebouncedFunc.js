import {useLatest} from 'react-use'
import {useCallback, useEffect, useRef, useState} from 'react'

export const useDebouncedFunc = (f, delay) => {
  const delayRef = useLatest(delay)
  const funcRef = useLatest(f)
  const argsRef = useRef(null)
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
    (...args) => {
      argsRef.current = args
      setDelayed(true)
    },
    [argsRef, setDelayed],
  )

  return [fn, delayed && argsRef.current]
}
