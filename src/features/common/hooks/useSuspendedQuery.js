import {useRef} from 'react'
import {useLatest} from 'react-use'
import noop from 'noop6'
import {useMyQuery} from './useMyQuery'

export const useSuspendedQuery = ({onCompleted = noop, ...props}) => {
  const onCompletedRef = useLatest(onCompleted)

  const resolveRef = useRef(noop)
  const promiseRef = useRef(
    new Promise(resolve => (resolveRef.current = resolve)),
  )

  const {loading, ...rest} = useMyQuery({
    ...props,
    onCompleted: () => {
      resolveRef.current()
      onCompletedRef.current()
    },
  })

  if (loading) throw promiseRef.current

  return {loading, ...rest}
}
