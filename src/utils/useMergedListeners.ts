import {EventHandler, SyntheticEvent} from 'react'
import {useDeepCompareCallback} from 'use-deep-compare'

export type UseMergedListeners = <T extends SyntheticEvent>(
  listeners: EventHandler<T>[],
) => EventHandler<T>

export const useMergedListeners: UseMergedListeners = (listeners = []) =>
  useDeepCompareCallback(event => listeners.forEach(cur => cur(event)), [
    listeners,
  ])
