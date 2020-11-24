import {RefObject, useMemo, useState} from 'react'
import {useLatest} from 'react-use'

type UsePromiseResult<Return> = {
  promise: Promisify<Return>
  resolve: Resolve<Return> | null
  resolveRef: RefObject<Resolve<Return>>
  reject: Reject | null
  rejectRef: RefObject<Reject>
}

export const usePromise = <Return>(): UsePromiseResult<Return> => {
  const [resolve, setResolve] = useState<null | Resolve<Return>>(null)
  const [reject, setReject] = useState<null | Reject>(null)

  const resolveRef = useLatest(resolve)
  const rejectRef = useLatest(reject)

  const promise = useMemo(
    () =>
      new Promise((resolve, reject) => {
        setResolve(() => resolve)
        setReject(() => reject)
      }) as Promisify<Return>,
    [setReject, setResolve],
  )

  return {promise, resolve, reject, resolveRef, rejectRef}
}

export type Resolve<T> = (result: T) => void

export type Reject = (error?: Error) => void

export type Promisify<T> = T extends Promise<any> ? T : Promise<T>
