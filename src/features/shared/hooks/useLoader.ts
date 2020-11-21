import {Ref, useEffect, useRef} from 'react'
import {makeVar, useReactiveVar} from '@apollo/client'

export const useLoader = (isLoading?: boolean): boolean => {
  const ref = useRef()

  const loadingRefs = useReactiveVar(loadingRefsVar)

  const loading = !!loadingRefs.length

  useEffect(() => {
    if (isLoading) addRef(ref)
    else removeRef(ref)

    return () => removeRef(ref)
  }, [isLoading, ref])

  return loading
}

export const loadingRefsVar = makeVar<Ref<unknown>[]>([])

export const setRefs = (
  update: (prev: Ref<unknown>[]) => Ref<unknown>[],
): void => void loadingRefsVar(update(loadingRefsVar()))

export const addRef = (ref: Ref<unknown>): void =>
  setRefs(refs => (refs.includes(ref) ? refs : refs.concat(ref)))

export const removeRef = (ref: Ref<unknown>): void =>
  setRefs(refs => refs.filter(e => e !== ref))
