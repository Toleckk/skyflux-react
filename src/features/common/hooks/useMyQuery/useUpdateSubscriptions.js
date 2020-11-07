import {useEffect, useState} from 'react'
import deepEqual from 'deep-equal'
import {useCustomCompareEffect, useLatest} from 'react-use'

export const useUpdateSubscriptions = ({
  subscriptions = [],
  subscribeToMore,
  refetch,
}) => {
  const [hasToBeRefetched, setHasToBeRefetched] = useState(false)

  useEffect(() => {
    if (hasToBeRefetched) {
      refetch()
      setHasToBeRefetched(false)
    }
  }, [hasToBeRefetched, setHasToBeRefetched, refetch])

  const subToMoreRef = useLatest(subscribeToMore)

  useCustomCompareEffect(
    () => {
      const unsubs = subscriptions.map(({updateQuery, ...sub}) =>
        subToMoreRef.current?.({
          ...sub,
          updateQuery: (prev, ...args) => {
            const res = updateQuery?.(prev, ...args)
            if (res === Symbol.for('refetch')) setHasToBeRefetched(true)
            return typeof res === 'object' ? res : prev
          },
        }),
      )
      return () => unsubs.forEach(unsub => unsub())
    },
    [subscriptions, subToMoreRef, setHasToBeRefetched],
    ([prevSubs, ...prev], [nextSubs, ...next]) =>
      deepEqual(
        prevSubs?.map(({updateQuery, ...rest}) => rest),
        nextSubs?.map(({updateQuery, ...rest}) => rest),
      ) &&
      prev[0] === next[0] &&
      prev[1] === next[1],
  )
}
