import React, {useCallback, useMemo, useRef, useState} from 'react'
import {useBooleanState} from 'use-boolean-state'
import {useLatest} from 'react-use'
import {ConfirmDialog, IconProps} from 'ui'

export const useConfirmDialog = <T extends Fn>(
  fn: T,
): [PromisifiedFn<T>, AppliedConfirmDialog] => {
  const [opened, open, close] = useBooleanState(false)

  const {resolveRef, promise} = usePromise()

  const fnRef = useLatest(fn)
  const argsRef = useRef<Parameters<T> | null>(null)

  const callFn = useCallback(() => {
    resolveRef.current?.(fnRef.current?.(...argsRef.current))
    close()
  }, [fnRef, argsRef, resolveRef, close])

  const Component = useCallback<AppliedConfirmDialog>(
    ({text, icon}) => (
      <ConfirmDialog
        text={text}
        icon={icon}
        visible={opened}
        onSubmit={callFn}
        onCancel={close}
      />
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

type UsePromiseResult = {
  promise: Promise<any>
  resolve: null | (() => void)
  reject: null | (() => void)
  resolveRef: {readonly current: Fn | null}
  rejectRef: {readonly current: Fn | null}
}

const usePromise = (): UsePromiseResult => {
  const [resolve, setResolve] = useState<null | Fn>(null)
  const [reject, setReject] = useState<null | Fn>(null)

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

type Fn = (...args: any[]) => any

type PromisifiedFn<T extends Fn> = (
  ...args: Parameters<T>
) => Promise<ReturnType<T>>

export type AppliedConfirmDialogProps = {
  text: string
  icon: IconProps['icon']
}

export type AppliedConfirmDialog = React.FC<AppliedConfirmDialogProps>
