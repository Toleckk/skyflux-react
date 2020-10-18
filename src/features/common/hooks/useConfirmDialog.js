import React, {useCallback, useMemo, useRef, useState} from 'react'
import {useBooleanState} from 'use-boolean-state'
import {useLatest} from 'react-use'
import {ConfirmDialog, Icon, Text} from 'ui'

export const useConfirmDialog = fn => {
  const [opened, open, close] = useBooleanState(false)

  const {resolveRef, promise} = usePromise()

  const fnRef = useLatest(fn)
  const argsRef = useRef([])

  const callFn = useCallback(() => {
    resolveRef.current(fnRef.current?.(...argsRef.current))
    close()
  }, [fnRef, argsRef, resolveRef, close])

  const Component = useCallback(
    ({text, icon}) => (
      <ConfirmDialog visible={opened} onClose={close}>
        <Text>{text}</Text>
        <button onClick={callFn}>
          <Icon icon={icon} size="2rem" />
        </button>
      </ConfirmDialog>
    ),
    [opened, close, callFn],
  )

  return [
    useCallback(
      (...args) => {
        argsRef.current = args
        open()
        return promise
      },
      [argsRef, open, promise],
    ),
    Component,
  ]
}

const usePromise = () => {
  const [resolve, setResolve] = useState(null)
  const [reject, setReject] = useState(null)

  const resolveRef = useLatest(resolve)
  const rejectRef = useLatest(reject)

  const promise = useMemo(
    () =>
      new Promise((resolve, reject) => {
        setResolve(() => resolve)
        setReject(() => reject)
      }),
    [setReject, setResolve],
  )

  return {promise, resolve, reject, resolveRef, rejectRef}
}
