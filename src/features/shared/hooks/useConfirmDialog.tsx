import React, {useCallback, useRef} from 'react'
import {useBooleanState} from 'use-boolean-state'
import {useLatest} from 'react-use'
import {ConfirmDialog, IconProps} from '@skyflux/react/ui'
import {Promisify, usePromise} from '@skyflux/react/utils'

type PromisifiedFn<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => Promisify<ReturnType<T>>

export type AppliedConfirmDialogProps = {
  text: string
  icon: IconProps['icon']
}

export type AppliedConfirmDialog = React.FC<AppliedConfirmDialogProps>

export const useConfirmDialog = <T extends (...args: any[]) => any>(
  fn: T,
): [PromisifiedFn<T>, AppliedConfirmDialog] => {
  const [opened, open, close] = useBooleanState(false)

  const {resolveRef, promise} = usePromise<ReturnType<T>>()

  const fnRef = useLatest(fn)
  const argsRef = useRef<Parameters<T> | null>(null)

  const callFn = useCallback(() => {
    if (argsRef.current)
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
