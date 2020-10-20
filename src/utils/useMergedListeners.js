import {useDeepCompareCallback} from 'use-deep-compare'

export const useMergedListeners = (listeners = []) =>
  useDeepCompareCallback(
    event => listeners.reduce((prev, cur) => cur(event) || prev, void 0),
    [listeners],
  )
