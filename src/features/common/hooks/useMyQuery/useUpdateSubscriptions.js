import {useEffect, useState} from 'react'
import deepEqual from 'deep-equal'
import {useCustomCompareEffect} from 'react-use'

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

  useCustomCompareEffect(
    () => {
      const unsubs = subscriptions.map(({updateQuery, ...sub}) =>
        subscribeToMore({
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
    [subscriptions, subscribeToMore, setHasToBeRefetched],
    ([prevSubs, ...prev], [nextSubs, ...next]) =>
      deepEqual(
        prevSubs?.map(({updateQuery, ...rest}) => rest),
        nextSubs?.map(({updateQuery, ...rest}) => rest),
      ) && deepEqual(prev, next),
  )
}
