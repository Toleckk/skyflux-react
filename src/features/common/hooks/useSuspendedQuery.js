import {useCallback, useRef} from 'react'
import {useLatest} from 'react-use'
import {useDeepCompareMemo} from 'use-deep-compare'
import noop from 'noop6'
import {useMyQuery} from './useMyQuery'

export const useSuspendedQuery = ({onCompleted = noop, ...props}) => {
  const options = useDeepCompareMemo(() => props, [props])
  const onCompletedRef = useLatest(onCompleted)

  const resolveRef = useRef(noop)
  const promiseRef = useRef(
    new Promise(resolve => (resolveRef.current = resolve)),
  )

  const onCompletedFn = useCallback(() => {
    resolveRef.current()
    onCompletedRef.current()
  }, [resolveRef, onCompletedRef])

  const {loading, ...rest} = useMyQuery({
    ...options,
    onCompleted: onCompletedFn,
  })

  if (loading) throw promiseRef.current

  return {loading, ...rest}
}
