import {useAsync} from '@react-hook/async'
import {useState} from 'react'
import {FirebaseError} from 'firebase'

export type UseFirebaseMutationResult<
  E extends Record<string, string>,
  F extends (...args: any[]) => any
> = {
  firebaseError?: Record<string, string & keyof E>
  loading: boolean
  execute: (...args: Parameters<F>) => Promise<void>
}

export const useFirebaseMutation = <
  E extends Record<string, string>,
  F extends (...args: any[]) => any
>(
  fn: F,
  errors?: Record<string, string & keyof E>,
): UseFirebaseMutationResult<E, F> => {
  const [firebaseError, setFirebaseError] = useState<
    Record<string, string & keyof E> | undefined
  >(undefined)

  const [{status}, execute] = useAsync<F>((...args) =>
    fn(...args).catch((e: FirebaseError) => {
      if (!errors) throw e
      const field = errors[e.code]
      if (field) setFirebaseError({[field]: e.message})
    }),
  )

  return {
    loading: status === 'loading',
    firebaseError,
    execute,
  }
}
